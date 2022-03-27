import './Card.css';

function Card({ value, callback, flippedMap, matchedMap, card, isFirstLoad }) {
	const matchedClass = matchedMap[card] ? 'matched ' : '';
	const flippedClass = flippedMap[card] ? 'flipped ' : '';
	const unabledClass = isFirstLoad ? 'unabled ' : '';

	return (
		<div data-card={card} className={'card-container ' + matchedClass}>
			<span
				className={'content ' + flippedClass + unabledClass}
				onClick={e => callback(e, flippedMap)}
			>
				{value}
			</span>
		</div>
	);
}

export default Card;
