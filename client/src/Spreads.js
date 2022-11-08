import { useState } from "react";
import back from "./cards/back.jpg"
import SpreadContainer from "./SpreadContainer";

function Spreads({ trueCards, user }) {
    const [spread, setSpread] = useState([])

    function handleClick(array) {
        let p = Math.random(); 
        let copy = array.slice(0);
        return function() {
          if (copy.length < 1) { copy = array.slice(0); }
          let index = Math.floor(Math.random() * copy.length);
          let item = copy[index];
          copy.splice(index, 1);
          setSpread([...spread, item])
        };
    }

    function resetSpread() {
        setSpread([])
    }

    return(
        <div>
            <h3>Click on the deck to pull a card</h3>
            <img src={back} alt="" onClick={handleClick(trueCards)}/>
            <br />
            <button onClick={resetSpread}>Reset Spread</button>
            <SpreadContainer spread={spread} user={user} />
        </div>
    )
}

export default Spreads;

/* 
This is what I want to happen. I want to have the picture of the back of the card. You click on the card. It gives you the back of one. You click on the back of the card, and it flips over to the front, revealing the image and name. You can then click on the button to reveal the explanation if you'd like. 


*/