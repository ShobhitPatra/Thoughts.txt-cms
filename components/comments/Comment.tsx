import React from "react";

interface CommentType {
  id: number;
  user: string;
  body: string;
  commentedAt: string;
}

const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="flex flex-col  w-full conatiner p-2 bg-slate-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 hover:bg-opacity-20 shadow-md shadow-gray-800 ">
      <div className="flex gap-2">
        <div>
          <span className="text-slate-0 text-base">@{comment.user}</span>
        </div>
        <div>
          <span className="text-slate-800 text-sm ">{comment.commentedAt}</span>
        </div>
      </div>
      <div className="text-white">{comment.body}</div>
    </div>
  );
};

export default Comment;
