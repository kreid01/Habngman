import './scss/main.css';
import React from 'react';
import RandomWord from './Components/RandomWord'
import Keyboard from './Components/Keyboard'
import Header from './Components/Header'
import Figure from './Components/Figure'
import { YouWin } from './Components/YouWin';
import Confetti from 'react-confetti'

function App() {

const [charArr, setCharArr] = React.useState('abcdefghijklmnopqrstuvwxyz'.split(''))
const [randomWord, setRandomWord] = React.useState('')
const [remainingLives, setRemainingLives] = React.useState(7)
const [randomWordArr, setRandomWordArr] = React.useState([])
const [isGameStarted, setIsGameStarted] = React.useState(false)
const [hasWon, setHasWon] = React.useState(false)
const [wrongLetters, setWrongLetters] = React.useState(0)

function getWord() {
  fetch('https://random-word-api.herokuapp.com/word')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setRandomWord((data).toString())
    setRandomWordArr((Array(((data).toString()).length)).fill('_'))
  })
  startGame() 
}
  

function startGame() {
  setIsGameStarted(true)
  setRemainingLives(7)
  setCharArr('abcdefghijklmnopqrstuvwxyz'.split(''))
  setWrongLetters(0)
  setHasWon(false)
}

function selectLetter(letter, i) {
  if(remainingLives > 1) {
  if(randomWord.includes(letter)) {
    
    const newArr = [...randomWordArr]
    const letterIndex = randomWord.indexOf(letter)
    const lastIndex = randomWord.lastIndexOf(letter)
    newArr.splice(letterIndex, 1, letter)
    newArr.splice(lastIndex, 1, letter)
  
    setRandomWordArr(() => newArr)
  } else {
    setRemainingLives(prevState => prevState - 1)
    setWrongLetters(prevState => prevState + 1)
  }
} 
const newArr = [...charArr]
const letterIndex = charArr.indexOf(letter)
newArr.splice(letterIndex, 1) 
setCharArr(newArr)

}

React.useEffect(() => {
  if(randomWordArr.length > 1) {
  if((!randomWordArr.includes('_'))){
    setHasWon(true)
    }
}
}, [randomWordArr])
 

  return (
    <main>
      <div className="container game-container">
          <Header 
          isGameStarted={isGameStarted}
          getWord={getWord}/>
          <RandomWord 
          remainingLives={remainingLives}
          randomWord={randomWord}
          randomWordArr={randomWordArr}/>
          {hasWon && <Confetti />}
          <YouWin
          hasWon={hasWon}/>
          <Keyboard
          hasWon={hasWon}
          charArr={charArr} 
          selectLetter={selectLetter}/>
          <Figure 
          wrongLetters={wrongLetters}
          />
      </div>
    </main>
  );
}

export default App;
