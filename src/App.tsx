import React , { useState } from 'react';
import List from './components/List';
import AddToList from './components/AddToList';
import './App.css';

export interface IState{
  anime:{
    name: string,
    release : number,
    url: string,
    note?: string

  }[]
}

function App() {


 const [anime, setAnime] = useState<IState["anime"]>([
  {name: "One Pice",
  release : 1997,
  url: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
  note: 'Japanese manga series written and illustrated by Eiichiro Oda'
  }, 
  {name: "Naruto",
  release : 1999,
  url: "https://www.anime-planet.com/images/anime/covers/1131.jpg?t=1579136379",
  note: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto"

  }
 ])



  return (
    <div className="App">
    <h1>Your Favorite Anime</h1>
    <List anime={anime}/>
    <AddToList anime={anime} setAnime={setAnime} />
    </div>
  );
}

export default App;
