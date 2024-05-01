import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <span className={cn("text-3xl flex justify-center", font.className)}>
      &#128274; {children}
    </span>
  );
};
