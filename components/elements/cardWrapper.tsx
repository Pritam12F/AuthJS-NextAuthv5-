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
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Selectors } from "./selectors";

type Props = {
  backLabel?: string;
  backFuncLabel?: string;
  backFuncHref: string;
  typeofcard: "Sign Up" | "Sign In";
  btnLabel?: string;
};

export const CardWrapper = ({
  backFuncHref,
  backFuncLabel,
  backLabel,
  typeofcard,
  btnLabel,
}: Props) => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>
          <Header label={typeofcard}></Header>
        </CardTitle>
        <CardDescription className="pt-2 text-center">
          <span className="space-x-4">
            <span className="text-gray-400 text-base">{backLabel}</span>
            <Link href={backFuncHref}>
              <span className="text-base text-gray-700 hover:underline">
                {backFuncLabel}
              </span>
            </Link>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="text" placeholder="Enter email" id="email"></Input>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Enter password"
              id="password"
            ></Input>
          </div>
          {typeofcard === "Sign Up" ? (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="confpassword">Password</Label>
              <Input
                type="confpassword"
                placeholder="Re-enter password"
                id="password"
              ></Input>
            </div>
          ) : null}
          {typeofcard === "Sign Up" ? <Selectors /> : null}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant={"default"} size={"xl"}>
          {typeofcard}
        </Button>
      </CardFooter>
    </Card>
  );
};
