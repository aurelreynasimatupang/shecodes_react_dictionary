import React from "react";

export default function Definition(param) {
  const defi = param.word;

  if (Object.keys(defi).length !== 0) {
    return <h2>{defi.word}</h2>;
  } else {
    return <h3>Type a word.</h3>;
  }
}
