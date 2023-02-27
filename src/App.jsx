import { useState } from "react";
import "./App.scss";
import Clock from "./components/Clock";
import { datas } from "./data/data";

function App() {
  const resetDatas = () => {
    if (confirm("전부 되돌리시겠습니까?")) {
      datas.map((data) => {
        data.enabled = true;
      });
    }
  };
  return (
    <div className="main">
      <div className="header">
        <h1> World Wide Time</h1>
      </div>
      <Clock />
      <div className="btnBox">
        <button onClick={resetDatas}>전부 되돌리기</button>
      </div>
    </div>
  );
}

export default App;
