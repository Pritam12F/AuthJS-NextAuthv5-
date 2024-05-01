import { LoginForm } from "@/components/auth/login-form";

export default function Signup() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <LoginForm typeofform="Sign In" />
    </div>
  );
}
