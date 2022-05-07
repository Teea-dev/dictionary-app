import React from 'react';

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
                  <p>{definition.definition}
                     <br/>
                  <em>{definition.example}</em>
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