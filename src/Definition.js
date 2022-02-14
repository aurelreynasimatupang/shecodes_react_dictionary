import React from "react";
import Meaning from "./Meaning";

export default function Definition(param) {
  console.log(param.word);
  if (Object.keys(param.word).length !== 0) {
    return (
      <div className="Definition">
        <h2>{param.word.word}</h2>
        {param.word.phonetics[0].text}
        <div className="Speeches">
          {param.word.meanings.map(function (item, key) {
            return <Meaning meaning={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return <h3>Type a word.</h3>;
  }
}
