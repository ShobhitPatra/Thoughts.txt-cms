import React from "react";
import CommentSection from "../comments/CommentSection";

const BlogDetail = ({
  title,
  description,
  writtenBy,
}: {
  title: string;
  description: string;
  writtenBy: string;
}) => {
  return (
    <>
      <div>
        <div className="flex flex-col space-y-4 w-full conatiner md:p-8 p-2 bg-slate-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 hover:bg-opacity-40 shadow-md shadow-gray-800 ">
          <div className="text-slate-950 md:text-4xl text-2xl font-bold">
            {title}
          </div>
          <div className="text-slate-900">
            by{" "}
            <span className="md:text-xl text-lg text-slate-300 font-semibold">
              {writtenBy}
            </span>
          </div>
          <div className="text-slate-900">{description}</div>
        </div>
        <CommentSection />
      </div>
    </>
  );
};

export default BlogDetail;
