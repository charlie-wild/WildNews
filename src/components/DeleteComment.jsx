import React from "react";
import * as api from "./api";

const DeleteComment = ({ article_id, comment_id }) => {
  const handleClick = () => {
    api.deleteComment(article_id, comment_id).then(() => {
      alert("comment deleted!");
      this.props.fetchComments();
    });
  };

  return (
    <div>
      <button
        className="button is-danger button is-small"
        onClick={handleClick}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteComment;
