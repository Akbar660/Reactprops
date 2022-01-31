import { useState } from "react";

import "./counter.css";

export function Counter() {
  const [counter, setCounter] = useState(1);

  const clickFun = (val) => {
    setCounter(counter + val);
  };

  if (counter === 10) {
    return <h1>Reached max counter value</h1>;
  }

  return (
    <div>
      <h3> Counter:{counter}</h3>
      <p className={counter % 2 === 0 ? "red" : "blue"}>
        Counter is :{counter % 2 === 0 ? "Even" : "Odd"}{" "}
      </p>
      <button onClick={() => clickFun(1)}>Add1</button>
      <button onClick={() => clickFun(-1)}>Dec 1</button>
    </div>
  );
}
