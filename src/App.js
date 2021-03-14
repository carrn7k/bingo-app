import React, { useEffect, useState } from "react";
// import background from "./assets/background.jpg";
import background from "./assets/background2.png";
import Number from "./Number";
import "./App.css";

const ranges = [
  { min: 1, max: 15 },
  { min: 16, max: 30 },
  { min: 31, max: 45 },
  { min: 46, max: 60 },
  { min: 61, max: 75 },
];

const generateNumbers = () => {
  const bingoNums = [];
  ranges.forEach((range) => {
    const result = [];
    const available = [];
    const { min, max } = range;
    for (let i = min; i < max + 1; i++) {
      available.push(i);
    }
    const totalLength = max - min + 1;
    for (let i = 0; i < 5; i++) {
      while (true) {
        const random = available[Math.floor(Math.random() * totalLength)];
        if (result.indexOf(random) === -1) {
          result.push(random);
          break;
        }
      }
    }
    bingoNums.push(result);
  });
  return bingoNums;
};

function App() {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setNumbers(generateNumbers());
    }, 500);
  }, []);
  return (
    <div className="App">
      {/* <img src={background} className="App-background" alt="background" /> */}
      <div className="grid-wrapper">
        <div className="grid">
          <div className="grid-container">
          {numbers.map((numArr, index) => (
            // <div className="grid-container" key={index}>
              numArr.map((num, itemIndex) => (
                <Number
                  key={num}
                  number={index === 2 && itemIndex === 2 ? "" : num}
                />
              ))
            // </div>
          ))}
          </div>
        </div>

        <div className="grid">
          <div className="grid-container">
          {numbers.map((numArr, index) => (
            // <div className="grid-container" key={index}>
              numArr.map((num, itemIndex) => (
                <Number
                  key={num}
                  number={index === 2 && itemIndex === 2 ? "" : num}
                />
              ))
            // </div>
          ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
