import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const[isdarkMode, setIsDarkMode]=useState(false);
  const appClass = false ? "App dark" : "App light"
function handleClick(event){
  setIsDarkMode(!isdarkMode)
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
