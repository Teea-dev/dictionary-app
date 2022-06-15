import React from 'react';
import "./synonyms.css";
const Synonyms = (props) => {
    if (props.synonyms) {
    return(  
        <div>
   
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