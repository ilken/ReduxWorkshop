import React from 'react';
import InputBar from '../input-bar';
import Item from '../item';

import { addItem, removeItem } from '../../actions/listActions';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		list: store.list
	};
})

export default class App extends React.Component {
	render () {
		const ListComponents = this.props.list.items.map((item) => {
			return <Item key={item.id} data={item} dispatch={this.props.dispatch}/>;
		});

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12 input-bar-container">
						<InputBar dispatch={this.props.dispatch}/>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 list-items-container">
						{ListComponents}
					</div>
				</div>
			</div>
		);
	}
}
