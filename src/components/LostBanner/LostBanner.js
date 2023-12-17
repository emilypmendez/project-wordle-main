import React from 'react';
import Banner from '../Banner/Banner';

function LostBanner({ answer, handleRestart }) {
  return <div>
    <Banner status="sad" action={handleRestart} actionText="Restart Game" >
      <p>
        <strong>Sorry!</strong> The correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  </div>;
}

export default LostBanner;
