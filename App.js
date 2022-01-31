// import { Userdetails } from "./components/userdetails";

import { Counter } from "./components/counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Userdetails name="akbar" add="goa" isMarried={true} />
      <Userdetails name="BASHA" add="Mumbai" isMarried={false} /> */}
      <Counter />
    </div>
  );
}
