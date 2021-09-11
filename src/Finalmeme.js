import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
// import Image from './Image'

export default function Finalmeme() {

   let {id, box} = useParams();
   let [meme, setMeme] =useState();
   let [text, setText] = useState(Array(parseInt(box)).fill(''));


  const ChangeHandler = (e, number) => {
    const t= [...text];
    t[number] =e.target.value;
    setText(t);
  }


  const submitHandler = (event) => {
    event.preventDefault();

    const boxes = Array(parseInt(box)).fill(" ");
    for(let i=0; i<box; i++){
      boxes[i] = {
        'text': text[i]
      }
    }

    var bodyFormData = new FormData();
    bodyFormData.append('template_id', id);
    bodyFormData.append('username', 'nitishah');
    bodyFormData.append('password', 'Nitishah');
    for(let i=0; i<(parseInt(box)); i++){
      bodyFormData.append(`boxes[${i}][text]`, text[i])
    }
   


    axios({
      method: 'POST',
      url: "https://api.imgflip.com/caption_image",
      data: bodyFormData,
      headers: {'Content-Type':'multipart/form-data'}

    })
      .then((res)=> {
        console.log(res);
        console.log(res.data);
        setMeme(res.data)
      })
      .catch((error) => console.log(error));
  }

 
    return (
      <div>
        <form onSubmit={submitHandler} >
          {Array(parseInt(box)).fill(0).map((_,index) => (
            <div key={index}>
              <textarea
              value= {text[index]}
              onChange= {e => ChangeHandler(e,index)}
              placeholder= {"Enter text for box"+(index+1)}
              />
            </div>
          ))}
          
          <button type="submit">Submit</button>
        </form>
        {meme===null?null: 
        <div>
        <h5 style={{color:'black'}}>Here is Your MEME!</h5>
        <p style={{color:'black'}}>Keep making awesome memes</p>
        <img style={{border:'2px solid black'}} src={meme.url} alt='' height='70%' width='70%'></img>
        </div>
         }
      </div>
    )
  
}