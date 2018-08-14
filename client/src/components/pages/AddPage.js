import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddForm from '../forms/AddForm';
import { add } from '../../actions/add';

class AddPage extends Component {
	submit = data => {
		return this.props.add(data).then(() => this.props.history.push('/'));
	};

	render() {
		return (
			<div>
				<h1>Add Page</h1>

				<AddForm submit={this.submit} />
				<Link to='/'>Cancel</Link>
			</div>
		);
	};
}

AddPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	add: PropTypes.func.isRequired
};

export default connect(null, { add })(AddPage);

