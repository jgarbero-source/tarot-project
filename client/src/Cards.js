import { useEffect, useState } from "react";
import Card from "./Card.js";
import Search from "./Search.js";

function Cards() {
    const [cards, setCards] = useState([])
    const [trueCards, setTrueCards] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("/cards")
            .then(r=>r.json())
            .then(r=> {
                setCards(r)
                setTrueCards(r)
        })
    }, [])

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    let cardDisplay = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))

    function toggleAll() {
        setCards(trueCards)
    }

    function toggleMajor() {
        cardDisplay = trueCards.filter(card => card.arcana === "Major Arcana")
        setCards(cardDisplay)
    }

    function toggleMinor() {
        cardDisplay = trueCards.filter(card => card.arcana === "Minor Arcana")
        setCards(cardDisplay)
    }

    function toggleCups() {
        cardDisplay = trueCards.filter(card => card.suit === "Cups")
        setCards(cardDisplay)
    }

    function toggleWands() {
        cardDisplay = trueCards.filter(card => card.suit === "Wands")
        setCards(cardDisplay)
    }

    function toggleSwords() {
        cardDisplay = trueCards.filter(card => card.suit === "Swords")
        setCards(cardDisplay)
    }

    function togglePentacles() {
        cardDisplay = trueCards.filter(card => card.suit === "Pentacles")
        setCards(cardDisplay)
    }

    return(
        <div>
            <h2>All Cards</h2>
            <h3>Card Search</h3>
            <Search handleSearch={handleSearch} />
            <button onClick={toggleAll}>All Cards</button>
            <button onClick={toggleMajor}>Major Arcana</button>
            <button onClick={toggleMinor}>Minor Arcana</button>
            <button onClick={toggleCups}>Suit of Cups</button>
            <button onClick={toggleWands}>Suit of Wands</button>
            <button onClick={toggleSwords}>Suit of Swords</button>
            <button onClick={togglePentacles}>Suit of Pentacles</button>
            <div>
            {cardDisplay.map(card => (
                <Card key={card.id} card={card}/>
            ))}
            </div>
        </div>
    )
}

export default Cards