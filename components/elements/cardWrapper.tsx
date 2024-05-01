import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "./header";
import { SocialsBar } from "./socials";
import { BackButton } from "./back-button";

type Props = {
  backLabel?: string;
  backFuncLabel?: string;
  backFuncHref: string;
  typeofcard: "Sign Up" | "Sign In";
  children: React.ReactNode;
};

export const CardWrapper = ({
  backFuncHref,
  backFuncLabel,
  backLabel,
  typeofcard,
  children,
}: Props) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          <Header>{typeofcard}</Header>
        </CardTitle>
        <CardDescription className="pt-2 text-center">
          <BackButton backFuncHref={backFuncHref} backLabel={backLabel}>
            {backFuncLabel}
          </BackButton>
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-center">
        <SocialsBar />
      </CardFooter>
    </Card>
  );
};
