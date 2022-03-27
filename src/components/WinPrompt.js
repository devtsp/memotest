import React from 'react';
import './WinPrompt.css';

const WinPrompt = ({ guesses, time }) => {
	return (
		<div
			id="win-prompt"
			className="text-center p-3 position-absolute top-50 start-50 translate-middle lh-sm"
		>
			<h5>Congratulations!</h5>
			<p className="mb-0">
				You solved the memotest in
				<strong id="win-tries-result"> {guesses}</strong> guesses and
				<strong id="win-timer-result"> {time}</strong> seconds! To play again
				just press 'RESTART'
			</p>
		</div>
	);
};

export default WinPrompt;
