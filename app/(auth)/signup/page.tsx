import { LoginForm } from "@/components/auth/login-form";

export default function Signin() {
  return (
    <main className="h-full flex items-center justify-center">
      <LoginForm typeofform="signup" />
    </main>
  );
}
