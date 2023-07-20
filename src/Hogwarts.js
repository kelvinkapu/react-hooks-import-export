// src/Hogwarts.js
import React from "react";
import whoseHouse from "./houses/whoseHouse";
import Hufflepuff from "./houses/Hufflepuff";
import * as GryffFunctions from "./houses/Gryffindor";
import Gryffindor from "./houses/Gryffindor";


console.log(colors);
// => 'Scarlet and Gold'
gryffMascot();
// => 'The Lion'
function Hogwarts() { // => "HAGRID'S HOUSE!"

  return
  <div>
      <Hufflepuff />
      <whoseHouse/>
      <Gryffindor/>

      <h1>Welcome to Hogwarts!</h1>;
    </div>
 
}





export default Hogwarts;