"use client";
import { useRouter } from "next/navigation";

useRouter;
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
  typeofb?: "signup" | "signin";
}

export const LoginButton = ({
  children,
  mode = "modal",
  asChild,
  typeofb = "signin",
}: LoginButtonProps) => {
  const router = useRouter();
  const onClickHandler = () => {
    if (typeofb == "signin") {
      router.push("/signin");
    } else {
      router.push("/signup");
    }
  };
  return (
    <span className="cursor-pointer inline-block mx-2" onClick={onClickHandler}>
      {children}
    </span>
  );
};
