import React from "react";
import "./App.css";
import Stories from "./Stories";

function App({ stories }) {
  return (
    <div className="app">
      <Stories stories={stories} onArchive={() => {}} />
    </div>
  );
}

export default App;
