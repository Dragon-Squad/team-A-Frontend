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

const LoginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const RegisterSchema = LoginSchema.extend({
  username: z.string().min(2, "Username must be at least 2 characters."),
});

type LoginFormValues = z.infer<typeof LoginSchema>;
type RegisterFormValues = z.infer<typeof RegisterSchema>;

interface AuthFormProps {
  mode: "login" | "register" | "forgot-password";
  onSubmit: (data: LoginFormValues | RegisterFormValues) => void;
  loading: boolean;
  error?: string;
  className?: string;
}

export function AuthForm({ mode, onSubmit, loading, error }: AuthFormProps) {
  const schema = mode === "login" ? LoginSchema : RegisterSchema;

  const form = useForm<LoginFormValues | RegisterFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      ...(mode === "register" ? { username: "" } : {}),
    },
  });

  const toggleModeText =
    mode === "login" ? "Don’t have an account? " : "Already have an account? ";
  const toggleModeActionText = mode === "login" ? "Register" : "Login";
  const toggleModeHref = mode === "login" ? "/signup" : "/signin";
  const forgotPasswordHref = "/forgot-password";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {mode === "register" && (
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
              : "Registering..."
            : mode === "login"
              ? "Login"
              : "Register"}
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
