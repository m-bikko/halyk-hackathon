import React from 'react';
import './MobileChat.css';

const MobileChat = () => {
    return (
        <div className="mobile-chat">
            <div className="header">
                <img className="back" src="/icons/left.svg" alt={``}/>
                <div className="logo">
                    <img src="/icons/haluk-life.svg.svg" alt={``}/>
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
                    <img src="/icons/like.svg" alt={``}/>
                    <img src="/icons/dislike.svg" alt={``}/>
                </div>
            </div>

            <div className="library">
                <h1>Genre Library</h1>
                <img src="/icons/right.svg"/>
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
                    <img src="/icons/plus.svg"/>
                </div>
                <div className="plane-circle">
                    <img className="plane" src="/icons/plane.svg"/>
                </div>
            </div>
        </div>
    );
}

export default MobileChat;
