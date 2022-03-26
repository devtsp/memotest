import React from 'react';
import './WinPrompt.css';

const WinPrompt = ({ restart }) => {
	return (
		<div
			id="win-prompt"
			className="text-center p-3 position-absolute top-50 start-50 translate-middle w-75 lh-sm"
		>
			<h5>Congratulations!</h5>
			<p className="mb-0">
				You solved the memotest in
				<br />
				<strong id="win-tries-result"> X</strong> guesses and
				<strong id="win-timer-result"> X</strong> seconds!
			</p>
		</div>
	);
};

export default WinPrompt;
