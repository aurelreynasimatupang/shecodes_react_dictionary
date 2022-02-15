import React from "react";

export default function Phonetics(param) {
  return (
    <div className="Phonetics">
      <a href={param.phone.audio} target="_blank" rel="noreferrer">
        Listen
      </a>{" "}
      {param.phone.text}
      <br />
    </div>
  );
}
