import React from "react";

export default function Meaning(param) {
  function Example(ex) {
    if (ex.eg !== undefined) {
      return <i>"{ex.eg}"</i>;
    }
    return <i></i>;
  }
  return (
    <div className="Meaning">
      <h3>{param.meaning.partOfSpeech}</h3>
      <ul>
        {param.meaning.definitions.map(function (item, key) {
          return (
            <div>
              <li key={key}>
                {item.definition}
                <br />
                <br />
                <Example eg={item.example} />
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
