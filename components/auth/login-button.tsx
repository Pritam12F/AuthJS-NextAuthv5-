"use client";
import { useRouter } from "next/navigation";

useRouter;
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "modal",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/signin");
  };
  return (
    <span className="cursor-pointer inline-block" onClick={onClickHandler}>
      {children}
    </span>
  );
};
