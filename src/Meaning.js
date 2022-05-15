import React from 'react';
import Synonyms from "./Synonyms";
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
                  <p>
                  Similar: {definition.definition}
                    <br />
                    {/* if ({definition.length} {'>'} 0) {
                       return(

                          <em>{definition.example}</em>;
                       )

                    &rbrace; else {
                      return null;
                    {'}'}

                    );  */}
                    <em>{definition.example}</em>
                  </p>
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