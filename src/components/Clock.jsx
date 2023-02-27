import moment from "moment-timezone";
import React, { useState } from "react";
import { datas } from "../data/data";

function Clock() {
  const [time, setTime] = useState(
    datas.map((data) => {
      return moment().tz(data.location).format("YYYY-MM-DD HH:mm:ss");
    })
  );

  return (
    <div className="clock">
      {datas.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
          <p>{time[data.id]}</p>
        </div>
      ))}
    </div>
  );
}

export default Clock;
