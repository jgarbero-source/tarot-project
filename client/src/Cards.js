import { useEffect, useState } from "react";
import Card from "./Card.js";

function Cards() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch("/cards")
            .then(r=>r.json())
            .then(r=> {
                setCards(r)
        })
    }, [])

    // console.log(cards)

    return(
        <div>
            <h2>All Cards</h2>
            <div>
            {cards.map(card => (
                <Card key={card.id} card={card}/>
            ))}
            </div>
        </div>
    )
}

export default Cards