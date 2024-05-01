import { AuthForm } from "@/components/auth/auth-form";

export default function Signin() {
  return (
    <main className="h-full flex items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <AuthForm typeofform="Sign Up" />
    </main>
  );
}
