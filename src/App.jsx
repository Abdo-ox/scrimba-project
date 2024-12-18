import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Language from './components/Languages'
import Char from "./components/Char"
const words = [
  "PADDING",
  "MARGIN",
  "ALIGNMENT",
  "HEIGHT",
  "WIDTH",
  "FLEXBOX",
  "CENTERING",
  "OVERFLOW",
  "POSITION",
  "RELATIVE",
  "ABSOLUTE",
  "TOP",
  "DISPLAY",
  "BLOCK",
  "FLEX",
  "GRID",
  "VIEWPORT",
  "PX",
  "PERCENTAGE",
  "REM",
  "BACKGROUND",
  "BORDER",
  "TRANSFORM",
  "OPACITY"
];
const langueArry = [{ name: "HTML", bgColor: "#E2680F", color: "#F9F4DA", safe: true },
{ name: "CSS", bgColor: "#328AF1", color: "#F9F4DA", safe: true },
{ name: "Javascript", bgColor: "#F4EB13", color: "#1E1E1E", safe: true },
{ name: "React", bgColor: "#2ED3E9", color: "#1E1E1E", safe: true },
{ name: "Typescript", bgColor: "#298EC6", color: "#F9F4DA", safe: true },
{ name: "Node.js", bgColor: "#599137", color: "#F9F4DA", safe: true },
{ name: "Python", bgColor: "#FFD742", color: "#1E1E1E", safe: true },
{ name: "Ruby", bgColor: "#D02B2B", color: "#1E1E1E", safe: true },
{ name: "Assembly", bgColor: "#2D519F", color: "#F9F4DA", safe: true },
];
const alphabet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('').map((char, index) => ({
  id: index + 1,
  char: char,
  pressed: false,
  correct: false
}))

function App() {
  const [languages, setLangues] = useState(langueArry);
  const [word, setWord] = useState(words[0].split('').map((char, index) => ({ char: char, discovered: false, id: index + 1, })))
  const [alpha, setAlpha] = useState(alphabet)
  function handlClick(char) {
    setWord(prev => prev.map(elm => elm.char == char.char? {...elm, discovered: true} : elm))
    setAlpha((prev) => prev.map(elm => elm.id == char.id ? char : elm))
  }
  return (
    <>
      <Header />
      <p className="turn-phrase">“Farewell HTML & CSS” 🫡</p>
      <div className="language-container">
        {languages.map(language => <Language key={language.name} info={language} />)}
      </div>
      <div className="word-box">
        {word.map(char => <div key={char.id} className="char">{char.discovered && char.char}</div>)}
      </div>
      <div className="clavie">
        {alpha.map(char => <Char
          key={char.id}
          info={char}
          word={word}
          handlClick={handlClick} />)}
      </div>
    </>
  )
}

export default App
