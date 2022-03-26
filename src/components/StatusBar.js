import React from 'react';
import StartButton from './StartButton';
import Timer from './Timer';
import GuessCounter from './GuessCounter';

const StatusBar = ({ gameEnded, restart }) => {
	return (
		<div className="d-flex justify-content-evenly align-items-center mt-2">
			<StartButton restart={restart} />
			<Timer />
			<GuessCounter />
		</div>
	);
};

export default StatusBar;
