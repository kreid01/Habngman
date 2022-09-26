import React from "react";

export default function Header(props) {

    const buttonDisplay = (props.isGameStarted) ? 'New Game': 'Start Game'

    return (
    <header>
    <h1>Hangman</h1>
    <button className='btn--start' onClick={() => props.getWord()}>{buttonDisplay}</button>
    </header>
    )
}