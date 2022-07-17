import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";
import Photo from "./Photo";
import "./dictionary.css";

const Dictionary = () => {
  const [input, setInput] = useState("nostalgia");
  const [result, setResult] = useState(null);
  const[buffer,setBuffer] = useState(false);
  const[photo,setPhoto] = useState(null);

  const handleSearch = (event) =>{
      event.preventDefault();
      search();
  };

  const handleResult = (response) => {
  if(!response.data)return
   setResult(response.data[0]);
  };

  const keyword = (event) => {
    setInput(event.target.value);
  };
  const handlePexelResponse = (response) =>{
   if (!response.data)return
     setPhoto(response.data.photos);
  }
  const search = () => {
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input} `;
    axios.get(apiUrl).then(handleResult);


    let pexelApiKey =
      "563492ad6f9170000100000133569d43e247462da6f37f165f24a3e8";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=4`;
    // let headers = {Authorization: `Bearer ${pexelApiKey}`};
    axios.get(pexelApiUrl , {headers: {"Authorization": `Bearer ${pexelApiKey}`}}).then(handlePexelResponse);
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
        {result && <Result result={result} />}
        {photo && <Photo photo={photo} />}
      </div>
    );
  }else{
    load()
    return"Loading"
  }
};

export default Dictionary;
