import { CardWrapper } from "../elements/cardWrapper";
import { FormWrapper } from "../elements/formWrapper";

interface AuthFormProps {
  typeofform: "Sign Up" | "Sign In";
}

export const AuthForm = ({ typeofform }: AuthFormProps) => {
  if (typeofform === "Sign In") {
    return (
      <CardWrapper
        backLabel="Don't have an account?"
        backFuncLabel="Sign up"
        backFuncHref="signup"
        typeofcard={typeofform}
      >
        <FormWrapper typeofform={typeofform} />
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
        <FormWrapper typeofform={typeofform} />
      </CardWrapper>
    );
  }
};
