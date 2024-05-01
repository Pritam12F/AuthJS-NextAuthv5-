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
import { InputsForm } from "./Inputs";
import { SocialsBar } from "./socials";
import { BackButton } from "./back-button";

type Props = {
  backLabel?: string;
  backFuncLabel?: string;
  backFuncHref: string;
  typeofcard: "Sign Up" | "Sign In";
};

export const CardWrapper = ({
  backFuncHref,
  backFuncLabel,
  backLabel,
  typeofcard,
}: Props) => {
  return (
    <Card className="w-[400px]">
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
      <CardContent>
        <InputsForm typeofcard={typeofcard} />
        <SocialsBar />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant={"default"} size={"xl"}>
          {typeofcard}
        </Button>
      </CardFooter>
    </Card>
  );
};
