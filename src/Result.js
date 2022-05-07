import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";



const Result = (props) => {
  if (props.result) {
    
  return (
    <>
      <div className="Result">
        <h2>{props.result.word}</h2>
        {props.result.phonetics.map(function(phonetic , index){
          return(
            <div key={index}>
             <Phonetic phonetic = {phonetic}/>
              </div>
          )
        })}
        <p>
          {props.result.meanings.map(function (meaning, index) {
            return (
              <>
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              </>
            );
          })}
        </p>
       
      </div>
    </>
  );
  } else {
    return null;
  }
    
};
export default Result;