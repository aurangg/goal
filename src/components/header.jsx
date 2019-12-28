import React from 'react';
import './header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Header() {
const headerColor = {
  backgroundColor: "black"
}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky" style={headerColor}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <div className="navbar-nav mr-auto">
        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#">Stream</a>
        <a className="nav-item nav-link" href="#">Artists</a>
      </div>
    </div>
    </nav>
  )

}

export default Header;
