import React from 'react';

export function YouWin(props) {

const styles = {
    display: (props.hasWon)? 'block' : 'none',
}

    return (
        <h1 style={styles}>You Win</h1>
    )
 }