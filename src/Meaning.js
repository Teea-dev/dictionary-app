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
                    Definition: {definition.definition}
                    <br />
                    <em>{definition.example}</em>
                    <Synonyms synonyms={props.meaning.synonyms} />
                  </p>
                </div>
              </>
            );
        })}
        </p>
      </>
    );
}
 
export default Meaning;