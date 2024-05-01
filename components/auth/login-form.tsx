import { CardWrapper } from "../elements/cardWrapper";

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
        Sign in form
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
        Sign up form
      </CardWrapper>
    );
  }
};
