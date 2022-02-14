import React from "react";

export default function Meaning(param) {
  return (
    <div className="Meaning">
      <h3>{param.meaning.partOfSpeech}</h3>
      <ul>
        {param.meaning.definitions.map(function (item, key) {
          return (
            <li>
              {item.definition}
              <br />
              <br />
              <i>"{item.example}"</i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
