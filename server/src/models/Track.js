import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	title: { type: String, required: true },
	movement: { type: String, required: false }, // If no movement specified, then assume complete work
	composer: { type: String, required: true },
	year: { type: Number, required: false }
});

export default mongoose.model('Track', schema);
