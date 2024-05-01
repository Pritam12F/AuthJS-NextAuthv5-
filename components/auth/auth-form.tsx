import { CardWrapper } from "../elements/cardWrapper";
import { FormWrapper } from "../elements/formWrapper";

interface LoginFormProps {
  typeofform: "Sign Up" | "Sign In";
}

export const LoginForm = ({ typeofform }: LoginFormProps) => {
  if (typeofform === "Sign In") {
    return (
      <CardWrapper
        backLabel="Don't have an account?"
        backFuncLabel="Sign up"
        backFuncHref="signup"
        typeofcard={typeofform}
      >
        <FormWrapper typeofform="Sign In" />
      </CardWrapper>
    );
  } else {
    return (
      <CardWrapper
        backLabel="Already have an account?"
        backFuncLabel="Log in"
        backFuncHref="signin"
        typeofcard={typeofform}
      >
        <FormWrapper typeofform="Sign Up" />
      </CardWrapper>
    );
  }
};
