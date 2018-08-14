import { TRACK_ADDED } from '../types';
import api from '../api';

export const trackAdded = track => ({
	type: TRACK_ADDED,
	track
});

export const add = metadata => dispatch => {
	return api.trackList.add(metadata)
		.then(track => dispatch(trackAdded(track)));
	// let a = api.trackList.add(metadata);
	// console.log('aoeuoeu', a);
};
