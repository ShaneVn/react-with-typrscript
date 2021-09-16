import React, { useState } from "react";
import {IState as Props } from "../App"

interface IProps{
  anime: Props["anime"]
  setAnime : React.Dispatch<React.SetStateAction<Props["anime"]>> 
}

const AddToList: React.FC<IProps> =({anime, setAnime})=> {

    const [input, setInput] = useState({
        name : "",
        release : "",
        note: "",
        url: ""
    })

    const handleChange = ({target} : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void =>{
        setInput({...input, [target.name]: target.value })
    }
    
    const handleClick = ():void =>{
        if(
          !input.name ||
          !input.release ||
          !input.url
        ){
          return
        }

        setAnime([
          ...anime,{
            name: input.name,
            release: parseInt(input.release),
            url : input.url,
            note : input.note

          }
        ])

        setInput(
         {
        name : "",
        release : "",
        note: "",
        url: ""
    })
    }

  return (
    <div className="AddToList">
      <input 
      type="text" 
      placeholder="Name" 
      className="AddToList-input" 
      value = {input.name} 
      name = "name"
      onChange={handleChange}
      />

      <input 
      type="text" 
      placeholder="Release Year" 
      className="AddToList-input" 
      value = {input.release}
      name = "release"
      onChange={handleChange}
      />

      <input 
      type="text" 
      placeholder="Image Url" 
      className="AddToList-input" 
      value = {input.url}
      name = "url"
      onChange={handleChange}
      />

      <textarea 
      placeholder="notes" 
      className="AddToList-input"
      value = {input.note}
      name = "note"
      onChange={handleChange}
      />

      <button 
      className= "AddToList-btn"
      onClick = {handleClick}>
            Add to List
      </button>
    </div>
  );
};

export default AddToList;
