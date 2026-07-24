
import React from 'react';
import './Video.css'
import PlayVideo from '../../Components/Navbar/PlayVideo/PlayVideo';
import Recommended from '../../Components/Navbar/Recommended/Recommended';

const Video = () => {
	return (
		<div className='play-container'>
			<PlayVideo />
			<Recommended />
		</div>
	);
};

export default Video;
