import React from 'react';

const Synonyms = (props) => {
    if (props.synonyms) {
        
    return <>
      <div className='Synonyms'>
          <h2>Synonyms</h2>
         <ul>
             {props.synonyms.map(function(synonyms , index){
                 return <>
                 <li key={index}>
                     {synonyms}
                 </li>
                 </>
             })}
         </ul>
      </div>
    </>
    } else {
        return null;
    }
}
 
export default Synonyms;