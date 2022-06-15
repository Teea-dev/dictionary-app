import React from 'react';
import Synonyms from "./Synonyms";
import "./meaning.css";
const Meaning = (props) => {
  
    return (
      <>
        <h3>
            {props.meaning.partOfSpeech}
            </h3>
        <p>
          
        {props.meaning.definitions.map(function(definition,index ){
            return (
              <>
                <div key={index}>
                  <div className="definition">

                   {definition.definition}
                  </div>
                    <br />
                    <div className="example">
                    {definition.example}
                    </div>
                </div>
              </>
            );
          })}
        <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </>
    );
}
 
export default Meaning;