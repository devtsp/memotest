import React from 'react';
import './Stopwatch.css';

const Stopwatch = ({ time }) => {
	return (
		<div id="stopwatch">
			⏳ = <strong>{time}</strong>
		</div>
	);
};

export default Stopwatch;
