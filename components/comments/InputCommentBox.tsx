import React from "react";

const InputCommentBox = () => {
  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Add Comment"
        className="input input-bordered input-primary  text-white w-full"
      />
      <button className="btn btn-outline btn-warning">Comment</button>
    </div>
  );
};

export default InputCommentBox;
