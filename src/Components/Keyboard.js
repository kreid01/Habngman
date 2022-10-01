import React from 'react';

export default function Player(props) {

const keyboard = props.charArr.map((letter, i) => {
    return (
        <button classItem 
        key={letter} 
        onClick={() => props.selectLetter(letter, i)}
        className='letter'>
        {letter}
        </button>
    )
})

const styles = {
    display : (props.hasWon)? 'none': ''
}
    return (
        <div style={styles} className='keyboardLayout'>
             {keyboard}  
        </div>
    )
}