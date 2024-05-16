import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((pervUserInput) => {
      return {
        ...pervUserInput,
        [inputIdentifier]: +newValue, // + plust converst the string of newvalue to a number value
      };  
    });
  }


  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {/* {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>} */}
      {/* {inputIsValid && } */}
      <Results input={userInput} />
    </>
  );
}

export default App;
