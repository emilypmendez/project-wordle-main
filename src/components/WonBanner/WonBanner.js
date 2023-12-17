import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ numOfGuesses, handleRestart }) {
  return <div>
    <Banner status="happy" handleRestart={handleRestart} actionText="Restart Game" >
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>
          {numOfGuesses === 1 
            ? '1 guess'
            : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  </div>;
}

export default WonBanner;
