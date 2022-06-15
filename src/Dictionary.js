import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

import "./dictionary.css";

const Dictionary = () => {
  const [input, setInput] = useState("nostalgia");
  const [result, setResult] = useState(null);
  const[buffer,setBuffer] = useState(false);


  const handleSearch = (event) =>{
      event.preventDefault();
      search();
  };

  const handleResult = (response) => {
   console.log(response.data);
   setResult(response.data[0]);
  };

  const keyword = (event) => {
    setInput(event.target.value);
  };
  const search = () => {
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input} `;
    axios.get(apiUrl).then(handleResult);
  };
  const load =()=>{
     setBuffer(true);
     search();
  };
  if (buffer){

    return (
      <div className="Dictionary">
        <section>
        <form onSubmit={handleSearch}>
          <input type="search" onChange={keyword} />
        </form>
        </section>
        <Result result= {result} />
      </div>
    );
  }else{
    load()
    return"Loading"
  }
};

export default Dictionary;
