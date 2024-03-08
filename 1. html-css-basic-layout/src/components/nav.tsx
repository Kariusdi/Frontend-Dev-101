import React from 'react'
import '../css/nav.css'

function Nav() {
  return (
    <nav>
        <div id="logo">
            <a href="#">My Website</a>
        </div>

        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav