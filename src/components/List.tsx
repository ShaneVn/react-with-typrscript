import React from 'react'
import {IState as IProps } from "../App"


 //another way to use IProps ({anime} : IProps) 
const List :React.FC<IProps>= ({anime}) => {


  const renderList = () : JSX.Element[] =>{
     return ( anime.map((data) =>{
       return(
        <li className = "List">
            <div className = "List-header">

              <img className= "List-img" src = {data.url} alt="pic"/>
              <h2>{data.name}</h2>
            </div>

            <p> Year released: {data.release}</p>
              <p className="List-note">{data.note}</p>
        </li>
       )
    
    }) )
     
  }

    return(
       <ul>

        {renderList()}
       </ul>
    )

}

export default List