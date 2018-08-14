import axios from 'axios';

export default {
	trackList: {
		add: metadata => {
			return axios.post('/api/tracks/', { metadata }).then(res => res.data.metadata);
		}
	}
}
