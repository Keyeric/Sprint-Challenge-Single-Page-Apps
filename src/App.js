import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import axios from 'axios';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from "./components/SearchForm.js";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('Oh jeez, Rick I-I think we really messed up this time! Look!', error);
      })
  }, []);  
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters/' render={props => <CharacterList  chars={characters} />} />
      <Route path='/search/' render={props => <SearchForm characters={characters} />} />
    </main>
  );
}