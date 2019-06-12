import React from "react";
import "./Story.css";

function Story({ story, columns }) {
  const { title, url, author, num_comments, points } = story;
  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>Archive</span>
    </div>
  );
}

export default Story;
