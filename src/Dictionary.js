import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [defi, setDefi] = useState({});

  function handleKeywordChange(event) {
    setWord(event.target.value);
  }

  function showDefi(response) {
    console.log(response.data[0]);
    /*setDefi({
      word: response.data[0].word,
      pronounce: response.data[0].phonetics[0].text,
      definition: response.data[0].meanings[0].definitions,
    });*/
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
    </div>
  );
}
