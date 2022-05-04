import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

import "./dctonary.css";

const Dictionary = () => {
  const [input, setInput] = useState(null);
  const [results, setResults] = useState([]);

  const handleResult = (response) => {
    console.log(response.data);
    const data = response.data;
   const definitionList = [];
    if (Array.isArray(data)) {
      data.forEach((i) => {
        if (i?.shortdef && i.shortdef.length > 0) {
          i.shortdef.forEach((d) => {
            definitionList.push(d);
          });
        }
      });
    }
    setResults(definitionList);
  };

  const keyword = (event) => {
    setInput(event.target.value);
  };
  const search = (event) => {
    event.preventDefault();
    let apiKey = "9caac34a-e609-49f0-a93b-033601cb78e2";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input} ?key=${apiKey}`;
    axios.get(apiUrl).then(handleResult);
    console.log(apiUrl);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={keyword} />
      </form>
      <Result {...{ results }} />
    </div>
  );
};

export default Dictionary;
