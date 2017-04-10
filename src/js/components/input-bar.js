import React from 'react';
import { addItem } from '../actions/listActions';

export default class InputBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: ''
		};
	}

	onChange = (e) => {
		this.setState({
			value: e.target.value
		});
	}

	onKeyPress = (e) => {
		if (e.key === 'Enter' && this.state.value) {
			this.props.dispatch(addItem(this.state.value));
			this.setState({value: ''});
		}
	}

	render () {
		return (
			<div className="row">
				<div className="col-md-12 col-sm-12 col-xs-12">
					<i className="fa fa-plus input-icon" aria-hidden="true"></i>

					<input
						className="input-bar"
						type="text"
						value={this.state.value}
						onChange={this.onChange}
						onKeyPress={this.onKeyPress}
						placeholder="Add instrument"/>
				</div>
			</div>
		);
	}
}
