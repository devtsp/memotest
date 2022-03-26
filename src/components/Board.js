import React from 'react';
import './Board.css';
import Card from './Card';

function Board({ cards, flippedMap, flipCard, matchedMap }) {
	return (
		<div className="board">
			{cards.map((card, index) => (
				<Card
					card={index}
					key={index}
					value={card}
					flippedMap={flippedMap}
					callback={flipCard}
					matchedMap={matchedMap}
				/>
			))}
		</div>
	);
}

export default Board;
