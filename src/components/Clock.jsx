import moment from "moment-timezone";
import React, { useState } from "react";
import { useInterval } from "react-use";
import { datas } from "../data/data";

function Clock() {
  const [time, setTime] = useState(
    datas.map((data) => {
      return moment().tz(data.location).format("YYYY-MM-DD HH:mm:ss");
    })
  );
  useInterval(() => {
    setTime(
      datas.map((data) => {
        return moment().tz(data.location).format("YYYY-MM-DD HH:mm:ss");
      })
    );
  }, 1000);

  return (
    <div className="clock">
      {datas
        .filter((data) => data.enabled === true)
        .map((data) => (
          <div key={data.id}>
            <h2>{data.name}</h2>
            <p>{time[data.id]}</p>
            <button onClick={() => clickBtnDelete(data)}>X</button>
          </div>
        ))}
    </div>
  );
}

const clickBtnDelete = (data) => {
  if (confirm("삭제 하시겠습니까?")) data.enabled = false;
};

export default Clock;
