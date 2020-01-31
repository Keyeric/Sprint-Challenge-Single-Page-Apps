import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <nav class="navbar navbar-light bg-light"></nav>
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        <div className = "lookNice">
        <Link to='/' >Home</Link>
        <Link to='/characters/' >Characters</Link>
        <Link to='/search/' >Search</Link>
        </div>
        </header>
  );
}