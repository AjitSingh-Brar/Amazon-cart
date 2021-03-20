import React from "react";
import "./App.css";
import CardItems from "./components/CardItems";
import CardTotal from "./components/CardTotal";
import Header from "./components/Header";

function App() {
  const title = "Amazon Cart";
  return (
    <div className="App">
      <Header title={title} />
      <div className="App-main">
        <CardItems />

        <CardTotal />
      </div>
    </div>
  );
}

export default App;
