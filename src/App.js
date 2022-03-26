import './App.css';
import Board from './components/Board';
import StatusBar from './components/StatusBar';
import useMemotestState from './hooks/useMemotestState';
import WinPrompt from './components/WinPrompt';

function App() {
	const { cards, flipCard, flippedMap, matchedMap, gameEnded, restart } =
		useMemotestState();
	return (
		<>
			<StatusBar gameEnded={gameEnded} restart={restart} />
			<div className="position-relative">
				<Board
					cards={cards}
					flipCard={flipCard}
					flippedMap={flippedMap}
					matchedMap={matchedMap}
					gameEnded={gameEnded}
				/>
				{gameEnded && <WinPrompt />}
			</div>
		</>
	);
}

export default App;
