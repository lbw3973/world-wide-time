import { useState } from "react";
import "./App.scss";
import Clock from "./components/Clock";
import { datas } from "./data/data";

function App() {
  return (
    <div className="main">
      <Clock />
    </div>
  );
}

export default App;
