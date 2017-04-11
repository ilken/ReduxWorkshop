import React from 'react';

import { removeItem } from '../actions/listActions';

export default class Item extends React.Component {
	removeItem = () => {
		this.props.dispatch(removeItem(this.props.data.id));
	}

	render () {
		return (
			<div className="row item">
				<div className="col-md-12 col-sm-12 col-xs-12">
					<span>{this.props.data.value}</span>
					<i class="fa fa-trash item-icon" aria-hidden="true" onClick={this.removeItem}></i>
				</div>
				<div className="col-md-12 col-sm-12 col-xs-12">
					<img src={this.props.data.gif} alt={this.props.data.value} height="100" width="100"/>
				</div>
			</div>
		);
	}
}
