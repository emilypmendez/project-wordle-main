import React from 'react';

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function addTentativeGuess(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert('Oops! Guess must be 5 characters long. 💖');
      return;
    }

    console.log( {tentativeGuess} );
    
    handleSubmitGuess(tentativeGuess);

    setTentativeGuess(''); // erase the guess after it is logged
  }
  
  return <div>
    <form 
      onSubmit={addTentativeGuess}
      className="guess-input-wrapper" 
      >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input"
        required
        disabled={gameStatus !== 'playing'}
        pattern="[a-zA-Z]{5,}"
        title="Must be 5 letter word"
        type="text" 
        placeholder="Enter a guess"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          console.log({ nextGuess });
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  </div>;
}

export default GuessInput;
