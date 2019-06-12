import React from "react";
import "./Stories.css";
import Story from "./Story";

function Stories({ stories }) {
  return (
    <div className="stories">
      {(stories || []).map(story => (
        <Story key={story.objectID} story={story} />
      ))}
    </div>
  );
}

export default Stories;
