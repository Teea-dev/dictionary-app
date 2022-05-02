import React ,{useState} from "react";

import axios from "axios";

const Dictionary =()=>{
    const[input,setInput] = useState(null);

    const handleResult=(response)=>{
       console.log(response.data);
    }


    const keyword =(event)=>{
        setInput(event.target.value);
    }
    const search =(event)=>{
   event.preventDefault();
   let apiKey = "9caac34a-e609-49f0-a93b-033601cb78e2";
     let apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input} ?key=${apiKey}`;
     axios.get(apiUrl).then(handleResult);
    }

    return(
      <div className="Dictionary"> 
      <form onSubmit={search}>
          <input type="search" onChange={keyword}/>
      </form>
      </div>

    );
}

export default Dictionary; 