import React from 'react';
import './StartButton.css';

const StartButton = ({ restart }) => {
	return (
		<div>
			<button id="start-button" className="btn fw-bolder" onClick={restart}>
				RESTART
			</button>
		</div>
	);
};

export default StartButton;
