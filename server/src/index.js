import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Track from './models/Track';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

app.get('/*/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/tracks/', (req, res) => {
	const { metadata } = req.body;
	const track = new Track(metadata);
	track
		.save()
		.then(newTrack => res.json({ metadata }));
});

app.listen(3001, () => console.log('Listening on localhost: 3001'));
