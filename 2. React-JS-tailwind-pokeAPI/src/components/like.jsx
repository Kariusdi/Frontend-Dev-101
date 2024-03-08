import React, { useState, useEffect } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function LikePoke() {
    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike((like) => !like);
    }
    
    return (
        <button onClick={toggleLike}>
            {like ? <FaHeart size={30} color='red' /> : <FaRegHeart size={30}/>}
        </button>
    )
}

export default LikePoke