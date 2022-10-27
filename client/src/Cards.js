import { useEffect, useState } from "react";
import Card from "./Card.js";
import Search from "./Search.js";

function Cards() {
    const [cards, setCards] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("/cards")
            .then(r=>r.json())
            .then(r=> {
                setCards(r)
        })
    }, [])

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    const cardDisplay = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))

    return(
        <div>
            <h2>All Cards</h2>
            <Search handleSearch={handleSearch} />
            <div>
            {cardDisplay.map(card => (
                <Card key={card.id} card={card}/>
            ))}
            </div>
        </div>
    )
}

export default Cards