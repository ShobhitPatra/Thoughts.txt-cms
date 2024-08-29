import React from "react";
import Comment from "./Comment";
import InputCommentBox from "./InputCommentBox";
import { comments } from "@/dummy-data/data";

const CommentSection = () => {
  return (
    <div className="my-6 space-y-2  ">
      <InputCommentBox />
      {comments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
};

export default CommentSection;
