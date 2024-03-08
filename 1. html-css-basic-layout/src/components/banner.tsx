import React from 'react'
import '../css/banner.css'

function Banner() {
  return (
    <section>
        <div id="info">
            <h4>Hello world, I'm</h4>
            <h1>Chonakan<br />Chumtap</h1>
            <p>I'm a intern developer</p>
        </div>

        <img id='profile-pic' src="https://i.pinimg.com/564x/3b/4f/2a/3b4f2a7527190f599c9c35a00fcdb698.jpg" alt="" />
    </section>
  )
}

export default Banner