import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomText from "../ui/text";
import { Checkbox } from "../ui/checkbox";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const RegisterSchema = LoginSchema.extend({
  username: z.string().min(2, "Username must be at least 2 characters."),
  role: z
    .array(z.enum(["Donor", "Charity"]))
    .min(1, "Please select at least one role."),
});

const OTPSchema = z.object({
  email: z.string().email("Invalid email address."),
  otpCode: z.string().length(6, "OTP must be exactly 6 characters."),
});

type LoginFormValues = z.infer<typeof LoginSchema>;
type RegisterFormValues = z.infer<typeof RegisterSchema>;
type OTPFormValues = z.infer<typeof OTPSchema>;

interface AuthFormProps {
  mode: "login" | "register" | "otp";
  onSubmit: (
    data: LoginFormValues | RegisterFormValues | OTPFormValues,
  ) => void;
  loading: boolean;
  error?: string;
  className?: string;
}

export function AuthForm({ mode, onSubmit, loading, error }: AuthFormProps) {
  const schema =
    mode === "login"
      ? LoginSchema
      : mode === "register"
        ? RegisterSchema
        : OTPSchema;

  const form = useForm<LoginFormValues | RegisterFormValues | OTPFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      ...(mode === "register" ? { username: "", role: [] } : {}),
      ...(mode === "otp" ? { otpCode: "" } : {}),
    },
  });

  const toggleModeText =
    mode === "login"
      ? "Don’t have an account? "
      : mode === "register"
        ? "Already have an account? "
        : "Return to Login? ";

  const toggleModeActionText =
    mode === "login" ? "Register" : mode === "register" ? "Login" : "Login";

  const toggleModeHref =
    mode === "login" ? "/signup" : mode === "register" ? "/signin" : "/signin";

  const forgotPasswordHref = "/forgot-password";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {mode === "register" && (
          <>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your username"
                      className="focus-visible:ring-primary-orange text-primary-orange"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select your roles</FormLabel>
                  <FormControl>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <Checkbox
                          checked={field.value.includes("Donor")}
                          onCheckedChange={(checked) => {
                            const newRoles = checked
                              ? [...field.value, "Donor"]
                              : field.value.filter((role) => role !== "Donor");
                            field.onChange(newRoles);
                          }}
                        />
                        <span>Donor</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <Checkbox
                          checked={field.value.includes("Charity")}
                          onCheckedChange={(checked) => {
                            const newRoles = checked
                              ? [...field.value, "Charity"]
                              : field.value.filter(
                                  (role) => role !== "Charity",
                                );
                            field.onChange(newRoles);
                          }}
                        />
                        <span>Charity</span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="focus-visible:ring-primary-orange text-primary-orange"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {mode !== "otp" && (
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="focus-visible:ring-primary-orange text-primary-orange"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {mode === "otp" && (
          <FormField
            control={form.control}
            name="otpCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>OTP Code</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your OTP code"
                    className="focus-visible:ring-primary-orange text-primary-orange"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {mode === "login" && (
          <CustomText
            withSpan={true}
            spanClassName="text-[0.8rem] text-neutral-500 dark:text-neutral-400 cursor-pointer"
            additionalText="Forgot Password?"
            additionalTextHref={forgotPasswordHref}
          />
        )}
        <Button
          className="w-full bg-primary-orange"
          type="submit"
          disabled={loading}
        >
          {loading
            ? mode === "login"
              ? "Logging in..."
              : mode === "register"
                ? "Registering..."
                : "Verifying..."
            : mode === "login"
              ? "Login"
              : mode === "register"
                ? "Register"
                : "Verify OTP"}
        </Button>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <CustomText
          className="text-[0.8rem] text-neutral-800 dark:text-neutral-400 flex justify-center gap-1"
          withSpan={true}
          spanClassName="text-primary-orange cursor-pointer"
          additionalText={toggleModeActionText}
          additionalTextHref={toggleModeHref}
        >
          {toggleModeText}
        </CustomText>
      </form>
    </Form>
  );
}
