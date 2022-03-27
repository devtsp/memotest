import React from 'react';

const shuffleCards = () => {
	const starterCards = ['🦍', '🐝', '🐞', '🐟', '🐓', '🦑', '🦅', '🐢'];
	return [...starterCards, ...starterCards].sort(
		() => Math.random() - Math.random()
	);
};

const startTimer = (setTime, olderInterval) => {
	clearInterval(olderInterval);
	let time = 0;
	const newInterval = setInterval(() => {
		setTime(++time);
	}, 1000);
	return newInterval;
};

const useMemotestState = () => {
	const [cards, setCards] = React.useState(shuffleCards());
	const [flippedMap, setFlippedMap] = React.useState(cards.map(card => false));
	const [matchedMap, setMatchedMap] = React.useState(cards.map(card => false));
	const [gameEnded, setGameEnded] = React.useState(false);
	const [guesses, setGuesses] = React.useState(0);
	const [time, setTime] = React.useState(0);
	const [interval, setInterval] = React.useState(null);
	const [isFirstLoad, setIsFirstLoad] = React.useState(true);

	const handleGuesses = () => {
		const selectionsArray = cards.filter(
			(card, i) => flippedMap[i] === true && matchedMap[i] === false
		);
		const selectionsSet = new Set(selectionsArray);
		if (selectionsArray.length === 2) {
			setGuesses(guesses + 1);
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
		setIsFirstLoad(false);
		setTime(0);
		setGuesses(0);
		const newInterval = startTimer(setTime, interval);
		setInterval(newInterval);
		setCards(shuffleCards());
		setFlippedMap(cards.map(card => false));
		setMatchedMap(cards.map(card => false));
		setGameEnded(false);
	};

	return {
		cards,
		guesses,
		gameEnded,
		matchedMap,
		flippedMap,
		flipCard,
		restart,
		time,
		interval,
		isFirstLoad,
	};
};

export default useMemotestState;
