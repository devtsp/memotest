import './App.css';
import Board from './components/Board';
import StatusBar from './components/StatusBar';
import useMemotestState from './hooks/useMemotestState';
import WinPrompt from './components/WinPrompt';
import Header from './components/Header';

function App() {
	const {
		cards,
		guesses,
		flipCard,
		flippedMap,
		matchedMap,
		gameEnded,
		restart,
		time,
		interval,
		isFirstLoad,
	} = useMemotestState();

	gameEnded && clearInterval(interval);
	return (
		<>
			<Header />
			<StatusBar
				restart={restart}
				guesses={guesses}
				time={time}
				isFirstLoad={isFirstLoad}
			/>
			<div className="position-relative">
				<Board
					cards={cards}
					flipCard={flipCard}
					flippedMap={flippedMap}
					matchedMap={matchedMap}
					gameEnded={gameEnded}
					isFirstLoad={isFirstLoad}
				/>
				{gameEnded && <WinPrompt guesses={guesses} time={time} />}
			</div>
		</>
	);
}

export default App;
