import React from "react";

const Result = ({ results }) => {
  return (
    <>
      {results && (
        <div className="Result">
          <h2>
            {" "}
            {results.meta} </h2>
        
          {results.map((definition, i) => {
            return <p key={i}>{definition} </p>;
          })}
        </div>
      )}
    </>
  );
};


export default Result;