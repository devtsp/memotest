import React from 'react';
import './StartButton.css';

const StartButton = ({ restart, isFirstLoad }) => {
	return (
		<div>
			<button id="start-button" className="btn fw-bolder" onClick={restart}>
				{isFirstLoad ? 'START' : 'RESTART'}
			</button>
		</div>
	);
};

export default StartButton;
