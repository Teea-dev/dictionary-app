import React ,{useState} from "react";

const Dictionary =()=>{
    const[input,setInput] = useState(null);


    const keyword =(event)=>{
        setInput(event.target.value);
    }
    const search =(event)=>{
   event.preventDefault();
      return alert(
          `Searching for${input}`
          
          )
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