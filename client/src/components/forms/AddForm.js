import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class AddForm extends Component {
	state = {
		title: '',
		movement: '',
		composer: '',
		performers: [
			{
				name: '',
				instrument: ''
			}
		],
		year: ''
		// numPerformers: 1
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// onChangePerformerName = e => {
	// 	const { performer, numPerformers } = this.state;
	// 	performer[numPerformers].name = e.target.value;
	// 	this.forceUpdate();
	// };
	//
	// onChangePerformerInstrument = e => {
	// 	const { performer, numPerformers } = this.state;
	// 	performer[numPerformers].instrument = e.target.value;
	// 	this.forceUpdate();
	// };


	addPerformer = () => {
		console.log(this.state);
	};

	onSubmit = () => {
		this.props.submit(this.state);
	};


	render() {
		// const { numPerformers } = this.state;

		return (
			<Form onSubmit={this.onSubmit}>
				<label htmlFor='trackInfo'>Track Info</label>
				<Form.Field>
					<label htmlFor='title'>Title</label>
					<input
						id='title'
						name='title'
						placeholder='title'
						value={this.state.title}
						onChange={this.onChange}
					/>
				</Form.Field>
				<Form.Field>
					<label htmlFor='movement'>Movement</label>
					<input
						id='movement'
						name='movement'
						placeholder='movement'
						value={this.state.movement}
						onChange={this.onChange}
					/>
				</Form.Field>
				<Form.Field>
					<label htmlFor='composer'>Composer</label>
					<input
						id='composer'
						name='composer'
						placeholder='composer'
						value={this.state.composer}
						onChange={this.onChange}
					/>
				</Form.Field>

				<label htmlFor='recordingInfo'>Recording Info</label>
				{/*<Form.Field>*/}
					{/*<label htmlFor='performers'>Performers</label>*/}
					{/*<input*/}
						{/*id='performer'*/}
						{/*name='performer'*/}
						{/*placeholder='performer'*/}
						{/*value={this.performers[numPerformers-1].name}*/}
						{/*onChange={this.onChangePerformerName}*/}
					{/*/>*/}
					{/*<input*/}
						{/*id='instrument'*/}
						{/*name='instrument'*/}
						{/*placeholder='instrument'*/}
						{/*value={this.performers[numPerformers-1].instrument}*/}
						{/*onChange={this.onChangePerformerInstrument}*/}
					{/*/>*/}
				{/*</Form.Field>*/}
				{/*<button onClick={() => this.addPerformer()}>Add Performer</button>*/}
				<Form.Field>
					<label htmlFor='year'>Recording Year</label>
					<input
						id='year'
						name='year'
						placeholder='year'
						value={this.state.year}
						onChange={this.onChange}
					/>
				</Form.Field>
				<Input type='file'></Input>
				<Button primary>Save</Button>
			</Form>
		);
	}
}

AddForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default AddForm;
