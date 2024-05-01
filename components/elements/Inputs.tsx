import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Selectors } from "./selectors";

interface InputsProps {
  typeofcard: string;
}

export const InputsForm = ({ typeofcard }: InputsProps) => {
  return (
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
          <Label htmlFor="confpassword">Confirm Password</Label>
          <Input
            type="password"
            placeholder="Re-enter password"
            id="confpassword"
          ></Input>
        </div>
      ) : null}
      {typeofcard === "Sign Up" ? <Selectors /> : null}
    </div>
  );
};
