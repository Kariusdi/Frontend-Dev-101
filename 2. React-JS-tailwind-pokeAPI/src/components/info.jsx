import React from 'react'
import '../css/info.css'

function InfoPoke( { poke, id } ) {
  return (
    <div id="info">
        <div id="name">
            <h1>{poke?.name}</h1>
            <h3>Pokemon id #{id}</h3>
        </div>
        <div id="abilities">

            <ul>
                {poke?.abilities?.map((abil, idx) => (
                <li key={idx}>{abil.ability.name}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default InfoPoke