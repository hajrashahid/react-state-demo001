import React, { useState } from 'react';
import './Room.css'; 


function Room() {
let [isLit, setLit] = useState(false);
let [Age,setAge] = useState(24)
/* this type of functions can be made arrow functions like the below 2 examples
function updateLit(){
    console.log("Button Clicked");
    setLit(!isLit);
}*/





   /* const  state = useState(true); this is the previous way to doing stuff
    const isLit = state[0];
    const setLit = state[1]; */
   // console.log(state);
  return (
    <div className={'room ${isLit? "lit":"dark"}'}>
This room is {isLit? "Lit":"dark"}
<br/>
Age = {Age}
<br/>
<button onClick= {() =>setLit(!isLit)}>Toggle Light</button>
<button onClick={ () => {
    console.log("Button Clicked");
    
    setAge(++Age);}}>Age button</button>      
    </div>
  );
}

export default Room;
