import React from 'react'
import { Link } from 'react-router-dom'; 
import './Memecard1.css';

function Memecard1(props) {
    return (
        <div>
            <Link to={`/${props.memes.id}/${props.memes.box_count}`} >
            <div class="polaroid">
                <img src={props.memes.url} alt={props.memes.name} style="width:100%" />
                <div class="container">
                    <button>Create Meme</button>
                </div>
            </div>

            </Link>
        </div>
    )
}

export default Memecard1
