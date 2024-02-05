import { useEffect, useState } from "react";
import "./App.css";
import Dice from "./Components/Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [times, setTimes] = useState(0);
  const bestTime = localStorage.getItem("bestTime") ? localStorage.getItem("bestTime") : "0";

  useEffect(() => {
    const allHeld = dice.every((d) => d.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((d) => d.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    } else {
      setTenzies(false);
    }
  }, [dice, tenzies]);

  useEffect(() => {
    if(tenzies){
      if(localStorage.getItem("bestTime")){
        if(bestTime > times){
          localStorage.setItem("bestTime", times);
        }
      }else{
        localStorage.setItem("bestTime",times);
      }
    }
  }, [tenzies]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return newDice;
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((d) => (d.id === id ? { ...d, isHeld: !d.isHeld } : d))
    );
  }

  const diceList = dice.map((element) => {
    return (
      <Dice
        key={element.id}
        id={element.id}
        value={element.value}
        isHeld={element.isHeld}
        holdDice={() => holdDice(element.id)}
      />
    );
  });
  function generateDice() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    };
  }
  function rollDice() {
    if (tenzies) {
      setDice((oldDice) => {
        oldDice = allNewDice();
        return oldDice;
      });
      setTenzies(false);
      setTimes(0);
    } else {
      setDice((oldDice) =>
        oldDice.map((d) => {
          return d.isHeld ? d : generateDice();
        })
      );
      setTimes(times + 1);
    }
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <div className="title-container">
        <h1 className="title">Tenzies</h1>
        <h2> Roll Count: {times}</h2>
        <h3> Best Count: {bestTime} </h3>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="dice-container"> {diceList} </div>
      <button onClick={rollDice} className="roll-dice">
        {tenzies ? "New game" : "Roll"}{" "}
      </button>
    </main>
  );
}
