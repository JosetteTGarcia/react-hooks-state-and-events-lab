import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from "react";

function App() {
const [isLight, setIsLight] = useState(true)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = !isLight ? "App dark" : "App light"

  function handleClick(){
    setIsLight((isLight) => !isLight)
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;


// function Toggle() {
//   const [isOn, setIsOn] = useState(false);

//  

//   return <button onClick={setIsOn((isOn) => !isOn)}>{isOn ? "ON" : "OFF"}</button>;
// }