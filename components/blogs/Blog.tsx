import React from "react";

export const Blog = ({
  writtenBy,
  title,
  description,
}: {
  writtenBy: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="max-w-xl flex flex-col p-2 bg-slate-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 hover:bg-opacity-50 shadow-md shadow-gray-800">
      <div className="text-slate-900 text-2xl font-semibold">{title}</div>
      <div className="text-slate-800">
        written by : <span className="text-blue-300 text-lg ">{writtenBy}</span>
      </div>
      <div className="text-slate-900">{description}</div>
    </div>
  );
};
