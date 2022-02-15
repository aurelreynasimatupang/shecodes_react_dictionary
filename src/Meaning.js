import React from "react";

export default function Meaning(param) {
  return (
    <div className="Meaning">
      <h3>{param.meaning.partOfSpeech}</h3>
      <ul>
        {param.meaning.definitions.map(function (item, key) {
          return (
            <div>
              <li>
                {item.definition}
                <br />
                <br />
                <i>"{item.example}"</i>
              </li>
              <br />
              <div className="container">
                <div className="row">
                  {item.synonyms.map(function (item, key) {
                    return <div className="synonym col-3">{item}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
