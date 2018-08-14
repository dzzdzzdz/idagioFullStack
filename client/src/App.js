import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AddPage from './components/pages/AddPage';

const App = () => (
	<div className='ui container'>
		<Route path='/' exact component={HomePage} />
		<Route path='/add' exact component={AddPage} />
	</div>
);

export default App;
