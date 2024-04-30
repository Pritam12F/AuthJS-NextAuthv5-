import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="bg-sky-400">Hi there</div>
      {children}
    </div>
  );
};

export default AuthLayout;
