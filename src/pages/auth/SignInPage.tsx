import { AuthForm } from "../../components/auth/authform";
import { Card } from "../../components/ui/card";
import Logo from "../../components/logo";
import NavigationBar from "@/components/ui/navigation-bar";
import { useLoginForm } from "@/hooks/use-form";

const LoginPage = () => {
  const { handleLoginSubmit, loading, error } = useLoginForm();

  return (
    <>
      <NavigationBar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-36 mb-10">
          <div className="flex justify-center mb-6">
            <Logo type={"logo1"} width={300} height={240} />
          </div>
          <AuthForm
            mode="login"
            onSubmit={handleLoginSubmit}
            loading={loading}
            error={error}
          />
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
