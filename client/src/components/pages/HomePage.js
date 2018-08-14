import React from 'react';
import { Link } from 'react-router-dom';
import TrackList from '../TrackList';

const HomePage = () => (
	<div>
		<h1>Home Page</h1>
		<TrackList />
		<Link to='/add'>Add Track</Link>
	</div>
);

export default HomePage;

