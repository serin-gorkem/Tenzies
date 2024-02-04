import "./App.css";
import Dice from "./Components/Dice";

export default function App() {
  
  return (
    <main>
      <div className="dice-container">
        <Dice value={1} className="dice"/>
        <Dice value={2} className="dice"/>
        <Dice value={3} className="dice"/>
        <Dice value={4} className="dice"/>
        <Dice value={5} className="dice"/>
        <Dice value={6} className="dice"/>
        <Dice value={7} className="dice"/>
        <Dice value={8} className="dice"/>
        <Dice value={9} className="dice"/>
        <Dice value={10} className="dice"/>
      </div>
    </main>
  );
}
