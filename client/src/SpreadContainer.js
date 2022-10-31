import { useEffect, useState } from "react";
import Card from "./Card";

function SpreadContainer({ spread, user }) {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([]);



    useEffect(() => {
        let ids = spread.map(card => (
            card.id
        ))
        let starterFormData = {
            number: spread.length,
            user_id: user.id,
            card_id: ids
        }
        setFormData(starterFormData)
    }, [])

    function handleSave() {
        fetch('/spreads', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(r => {
            if (r.ok) {
                r.json().then(spread => {
                    console.log(spread)
                })
            } else {
                r.json().then((json) => setErrors(Object.entries(json.errors)));
            }
        })

    }

    return(
        <div>
            {spread.map(card => (
                <Card key={card.id} card={card}/>
            ))}
            {spread.length === 0 ? null : 
            <button onClick={handleSave}>Save Spread</button>}
        </div>
    )
}

export default SpreadContainer