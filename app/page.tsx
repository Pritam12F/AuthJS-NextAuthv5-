import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="h-full justify-center items-center flex flex-col bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="space-y-6 text-center">
        <h2
          className={cn(
            "text-5xl text-white font-semibold drop-shadow-md",
            font.className
          )}
        >
          &#128274; Auth
        </h2>
        <p className="text-2xl">Login with your credentials</p>
        <LoginButton>
          <Button size={"lg"}>Sign in</Button>
        </LoginButton>
        <LoginButton>
          <Button size={"lg"}>Sign up</Button>
        </LoginButton>
      </div>
    </main>
  );
}
