import React from 'react';
import './Board.css';
import Card from './Card';

const shuffleCards = () => {
	const starterCards = ['🦍', '🐝', '🐞', '🐟', '🐓', '🦑', '🦅', '🐢'];
	return [...starterCards, ...starterCards].sort(
		() => Math.random() - Math.random()
	);
};

const useMemotestState = () => {
	const [cards, setCards] = React.useState(shuffleCards());
	const [flippedMap, setFlippedMap] = React.useState(cards.map(card => false));
	const [matchedMap, setMatchedMap] = React.useState(cards.map(card => false));
	const [gameEnded, setGameEnded] = React.useState(false);

	const handleGuesses = () => {
		const selectionsArray = cards.filter(
			(card, i) => flippedMap[i] === true && matchedMap[i] === false
		);
		const selectionsSet = new Set(selectionsArray);
		if (selectionsArray.length === 2) {
			const waitToTableUpkeep = new Promise((res, rej) => {
				setTimeout(() => {
					if (selectionsSet.size === 1) {
						const newMatchedMap = matchedMap.map((match, i) =>
							flippedMap[i] ? true : false
						);
						res(newMatchedMap);
					} else {
						const newFlippedMap = flippedMap.map((flipped, i) =>
							matchedMap[i] ? true : false
						);
						rej(newFlippedMap);
					}
				}, 500);
			});
			waitToTableUpkeep
				.then(matchedMap => {
					setMatchedMap(matchedMap);
					if (matchedMap.filter(match => match === true).length === 16) {
						setGameEnded(true);
					}
				})
				.catch(flippedMap => setFlippedMap(flippedMap));
		}
	};

	const flipCard = e => {
		flippedMap.splice(e.target.parentNode.dataset.card, 1, true);
		setFlippedMap([...flippedMap]);
		handleGuesses();
	};

	const restart = () => {
		setCards(shuffleCards());
		setFlippedMap(cards.map(card => false));
		setMatchedMap(cards.map(card => false));
		setGameEnded(false);
	};

	return { cards, gameEnded, matchedMap, flippedMap, flipCard, restart };
};

function Board() {
	const { cards, flipCard, flippedMap, matchedMap, gameEnded, restart } =
		useMemotestState();

	if (gameEnded) setTimeout(() => restart(), 2000);

	return (
		<>
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
		</>
	);
}

export default Board;
