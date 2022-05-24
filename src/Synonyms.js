import React from 'react';

const Synonyms = (props) => {
    if (props.synonyms) {
    return(  
        <div>
   <h2>lmao</h2>
         <ul className='Synonyms'>
             {props.synonyms.map(function(synonym , index){
                 return (  
                 <li key={index}>
                     {synonym}
                 </li>
                 );
             })}
         </ul>
                     </div>
      
    );
    }
     else {
        return null;
    }
}
 
export default Synonyms;