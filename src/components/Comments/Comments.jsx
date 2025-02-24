import "./Comments.scss";

function Comments({ comments }) {
  function formatTimestamp(ts) {
    const date = new Date(ts);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  if (comments.length === 0)
    return <h1 className="loading">Loading Comments</h1>;
  const reversedComments = Array.from(comments);
  reversedComments.reverse();

  return (
    <div className="comments">
      <h3 className="comments__count">{comments.length} Comments</h3>

      {reversedComments.map((comment, index) => (
        <div key={index} className="comments__comment">
          <div className="comments__comment-header">
            <span className="comment-name">{comment.name}</span>
            <span className="comment-date">
              {formatTimestamp(comment.timestamp)}
            </span>
          </div>

          <p className="comments__comment-text">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
