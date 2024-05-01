"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

export const SocialsBar = () => {
  return (
    <div className="flex justify-start my-4">
      <Button
        variant={"outline"}
        className="mx-2 drop-shadow-md"
        size={"xl"}
        onClick={() => {}}
      >
        <FcGoogle className="h-7 w-7" />
      </Button>
      <Button
        variant={"outline"}
        className="mx-2 drop-shadow-md"
        size={"xl"}
        onClick={() => {}}
      >
        <FaGithub className="h-7 w-7" />
      </Button>
    </div>
  );
};
