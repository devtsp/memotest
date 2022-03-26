import './Card.css';

function Card({ value, callback, flippedMap, matchedMap, card }) {
	const matchedClass = matchedMap[card] ? 'matched ' : '';
	const flippedClass = flippedMap[card] ? 'flipped ' : '';

	return (
		<div data-card={card} className={'card-container ' + matchedClass}>
			<span
				className={'content ' + flippedClass}
				onClick={e => callback(e, flippedMap)}
			>
				{value}
			</span>
		</div>
	);
}

export default Card;
