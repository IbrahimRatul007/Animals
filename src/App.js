import "./App.css";
import data from "./data/data.json";
import Animals from "./components/Animals";
import Search from "./components/Search";
import Names from "./components/Names";
import { useState } from "react";

function App() {
  const [checkedNames, setCheckedNames] = useState([]);

  // console.log(checkedNames);
  return (
    <div className="App">
      <ul className="animals">
        {data.map((animal) => (
          <Animals animal={animal} checkedNames={checkedNames} />
        ))}
      </ul>
      <ul className="animal-names">
        {data.map((animal) => (
          <Names animal={animal} setCheckedNames={setCheckedNames} />
        ))}
      </ul>
      <Search />
    </div>
  );
}

export default App;
