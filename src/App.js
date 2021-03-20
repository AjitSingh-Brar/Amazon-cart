import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  
    const title="Amazon Cart";
  return (

    <div className="App">
      <Header title={title} />
      <div className="App-main">

        <div className="CardItems">
          <h1>Shopping Cart</h1>
        </div>
        
        <div className="CardTotal"></div>

      </div>
    </div>
  );
}

export default App;
