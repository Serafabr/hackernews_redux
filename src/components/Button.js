import React from "react";

function ButtonInline({ type = "button", onClick }) {
  return (
    <button type={type} className="button-inline" onClick={onClick}>
      Archive
    </button>
  );
}

export default ButtonInline;
