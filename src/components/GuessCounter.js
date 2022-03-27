import React from 'react';
import './GuessCounter.css';

const GuessCounter = ({ guesses }) => {
	return (
		<div id="guesses">
			👆 = <strong>{guesses}</strong>
		</div>
	);
};

export default GuessCounter;
