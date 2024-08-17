import SigninForm from "@/components/ui/forms/SigninForm";
import React from "react";

const page = () => {
  return (
    <div
      className="flex justify-center items-center 
    max-w-[300px] max-h-[440px]
    h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100
    "
    >
      <SigninForm />
    </div>
  );
};

export default page;
