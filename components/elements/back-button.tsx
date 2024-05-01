import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  children?: React.ReactNode;
  backFuncHref: string;
  backFuncLabel?: string;
}

export const BackButton = ({
  backFuncHref,
  backFuncLabel,
  children,
}: BackButtonProps) => {
  return (
    <span className="-space-x-2">
      <label className="text-gray-400 text-base">{backLabel}</label>
      <Link href={backFuncHref}>
        <Button variant={"link"}>{children}</Button>
      </Link>
    </span>
  );
};
