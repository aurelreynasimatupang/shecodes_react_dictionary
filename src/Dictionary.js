import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import Gallery from "./Gallery";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [defi, setDefinition] = useState({});

  function handleKeywordChange(event) {
    setWord(event.target.value);
  }

  function showDefi(response) {
    setDefinition({
      word: response.data[0].word,
      phonetics: response.data[0].phonetics,
      meanings: response.data[0].meanings,
    });
  }

  function submit(event) {
    event.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
      .then(showDefi);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={submit}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" className="submitbtn" />
      </form>
      <Definition word={defi} />
      <Gallery word={defi} />
    </div>
  );
}
