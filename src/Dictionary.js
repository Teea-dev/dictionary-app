import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

import "./dictionary.css";

const Dictionary = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  


  const handleResult = (response) => {
   console.log(response.data);
   setResult(response.data[0]);
  };

  const keyword = (event) => {
    setInput(event.target.value);
  };
  const search = (event) => {
    event.preventDefault();
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input} `;
    axios.get(apiUrl).then(handleResult);
  };

  return (
    <div className="Dictionary">
      <section>
      <form onSubmit={search}>
        <input type="search" onChange={keyword} />
      </form>
      </section>
      <Result result= {result} />
    </div>
  );
};

export default Dictionary;
