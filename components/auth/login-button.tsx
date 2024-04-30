"use client";
import { useRouter } from "next/navigation";

useRouter;
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
  href?: string;
}

export const LoginButton = ({
  children,
  mode = "modal",
  asChild,
  href,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/${href}`);
  };
  return (
    <span className="cursor-pointer inline-block mx-2" onClick={onClickHandler}>
      {children}
    </span>
  );
};
