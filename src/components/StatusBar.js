import React from 'react';
import './StatusBar.css';
import StartButton from './StartButton';
import Stopwatch from './Stopwatch';
import GuessCounter from './GuessCounter';

const StatusBar = ({ restart, guesses, time, isFirstLoad }) => {
	return (
		<div className="status-bar d-flex justify-content-evenly align-items-center">
			<StartButton restart={restart} isFirstLoad={isFirstLoad} />
			<Stopwatch time={time} />
			<GuessCounter guesses={guesses} />
		</div>
	);
};

export default StatusBar;
