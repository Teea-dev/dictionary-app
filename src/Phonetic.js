import React from 'react';

const Phonetic = (props) => {

    console.log(props.phonetic);
     return <>
       <a href={props.phonetic.audio} >listen</a>
       <p>
           {props.phonetic.text}
       </p>
     </>
}
 
export default Phonetic;