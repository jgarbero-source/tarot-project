import {useEffect, useState} from "react";
import back from "./cards/back.jpg"

function Card({ card }) {

    const { name, arcana, archetype, elemental, fortune_telling, hebrew, img, keywords, light_meanings, shadow_meanings, mythical, number, numerology, questions, suit } = card

  

    return(
        <div>
            <ul class="common-list">
                <h2>{name}</h2>
                <h4>{arcana}</h4>
                <p>Keywords: 
                    {/* {keywords?.map(line=> (
                        <p>{line}</p>
                    ))} */}
                    {keywords}
                </p>
                <img src={require(`./cards/${img}`)}/>
                <p>
                    Psychic meanings: 
                    {fortune_telling?.map(line=> (
                        <ul>- {line}</ul>
                    ))}
                </p>
                <p>
                    Upright meanings:
                    {light_meanings?.map(line=> (
                        <ul>- {line}</ul>
                    ))}
                </p>
                <p>
                    Reversed meanings:
                    {shadow_meanings?.map(line=> (
                        <ul>- {line}</ul>
                    ))}
                </p>
                <p>
                    Questions for consideration:
                    {questions?.map(line=> (
                        <ul>- {line}</ul>
                    ))}
                </p>
            </ul>
        </div>
    )
}

export default Card;