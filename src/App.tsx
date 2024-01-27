import React from 'react';
import './App.css';
import back from "./images/left.svg";
import logo from "./images/haluk-life.svg"
import like from "./images/like.svg"
import dislike from "./images/dislike.svg"
import right from "./images/right.svg"
import plus from "./images/plus.svg"
import plane from "./images/plane.svg"

function App() {
  return (
    <div className="App">
        <div className="header">
            <img className="back" src={back} alt={``}/>
            <div className="logo">
                <img src={logo} alt={``}/>
            </div>
        </div>

        <div className="stop-generating">
            <div className="rectangle-box">
                <div className="rectangle"></div>
            </div>
            <p>Stop generating</p>
        </div>


        <div className="welcome">
            <p>
                Welcome to our cinematic corner!
                <br/>
                <br/>
                <br/>
                I'm ready to help you find the perfect movie to watch. Just tell me what you like, and I'll pick up some great options. I can offer films of different genres: from exciting action films to touching dramas.
                <br/>
                <br/>
                <br/>
                For example, you can tell me your preferences in genre, mood, or even the actors you love. Let's start an adventure in the world of cinema!
            </p>
            <div className="like-box">
                <img src={like} alt={``}/>
                <img src={dislike} alt={``}/>
            </div>
        </div>

        <div className="library">
            <h1>Genre Library</h1>
            <img src={right}/>
        </div>

        <div className="buttons">
            <button>Action</button>
            <button>Adventure</button>
            <button>Comedy</button>
            <button>Drama</button>
            <button>Horror</button>
            <button>Fantasy</button>
        </div>

        <div className="enter-text">

            <div className="input-box">
                <input type="text" placeholder="Type your question..."/>
                <img src={plus}/>
            </div>
            <div className="plane-circle">
                <img className="plane" src={plane}/>
            </div>
        </div>
    </div>
  );
}

export default App;
