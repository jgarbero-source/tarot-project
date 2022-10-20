import {useEffect, useState} from "react";

function Card({ card }) {

    const { name, arcana, archetype, elemental, fortune_telling, hebrew, img, keywords, light_meanings, shadow_meanings, mythical, number, numerology, questions, suit } = card

    console.log(name)

    return(
        <div>
            <ul>
                <h3>{name}</h3>
                <img src={img}/>
            </ul>
        </div>
    )
}

export default Card;