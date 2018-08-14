import { TRACK_ADDED } from "../types";

export default function track(state = {}, action = {}) {
	switch(action.type) {
		case TRACK_ADDED:
			return action.track;
		default: return state;
	}
};
