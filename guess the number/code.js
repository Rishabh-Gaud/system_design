import React, { useState, useEffect } from "react";

function GuessTheNumber() {
  const [guess, setGuess] = useState();
  const [actualNumber, setActualNumber] = useState(Math.ceil(Math.random() * 100));
  const [attempts, setAttempts] = useState(0); 
  const [message, setMessage] = useState('');
  
  // Function to generate guess number
  function generateGuessNumber() {
    return Math.ceil(Math.random() * 100);
  }

  const handleGuess = () => {
  const num = parseInt(guess);
  if (isNaN(num) || num > 100 || num < 1) {
    setMessage("Please enter a number between 1 and 100");
    return;
  }

  if (num === actualNumber) {
    setAttempts(prev => prev + 1);
    setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
  } else if (num > actualNumber) {
    setAttempts(prev => prev + 1);
    setMessage("Too high! Try again.");
  } else {
    setAttempts(prev => prev + 1);
    setMessage("Too low! Try again.");
  }
};

const resetGame = () => {
  setAttempts(0); // Start fresh
  setActualNumber(generateGuessNumber());
  setMessage('');
  setGuess('');
};

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"50px 0"}}>
      <h2>Guess the Number</h2>
      <input
        id="guess-input"
        type="number"
        placeholder="Enter a number between 1 and 100"
        style={{width:"300px",padding:"5px"}}
        value={guess}
        onChange = {e => setGuess(e.target.value)}
      />
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "10px 5px"}}>
        <button  onClick={handleGuess} style={{marginRight: "16px"}}>Check Guess</button>
        <button  onClick={resetGame}>Reset game</button>
      </div>
        <p style={{marginTop: "2rem"}}>{message}</p>
      
    </div>
  );
}

export default GuessTheNumber;
