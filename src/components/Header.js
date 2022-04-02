import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div id="header">
			<h4>🧠 Emoji-Memotest 🧠</h4>
			<p id="header-description" className="my-4 text-black-50">
				{' '}
				Enjoy once again this tabletop classic..
				<br />
				this time with animal Emojis!! <br /> <span> 🐥 🦥 🐇 🦜 🦈 🦎 </span>
			</p>
		</div>
	);
};

export default Header;
