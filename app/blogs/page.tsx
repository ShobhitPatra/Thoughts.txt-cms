import Blogs from "@/components/blogs/Blogs";
import React from "react";

const page = () => {
  return (
    <div
      className="
    h-screen bg-gradient-to-r from-indigo-900 from-10% via-sky-900 via-30% to-emerald-900 to-90%
    md:py-20 p-8"
    >
      <Blogs />
    </div>
  );
};

export default page;
