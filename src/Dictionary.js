import React from "react";

export default function Dictionary() {
  function handleKeywordChange() {}
  function submit() {}

  return (
    <div className="Dictionary">
      <form onSubmit={submit}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" className="submitbtn" />
      </form>
    </div>
  );
}
