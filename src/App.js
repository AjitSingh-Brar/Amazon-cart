import React, { useState } from "react";
import "./App.css";
import CardItems from "./components/CardItems";
import CardTotal from "./components/CardTotal";
import Header from "./components/Header";
import data from "./Data";

function App() {
  const [cartItems, setCartItems] = useState(data);

  // console.log(cartItems);

  const title = "Amazon Cart";
  return (
    <div className="App">
      <Header title={title} />
      <div className="App-main">
        <CardItems items={cartItems}  setCartItems = {setCartItems}/>

        <CardTotal items={cartItems}/>
      </div>
    </div>
  );
}

export default App;
