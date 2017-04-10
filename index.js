import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './src/js/components/layout/header';
import App from './src/js/components/layout/app';
import Footer from './src/js/components/layout/footer';
import store from './src/js/stores/store';

import { Provider } from 'react-redux';

require('./src/sass/main.scss');

export default class Layout extends React.Component {
	render () {
		return (
			<div className="app-container">
				<Header/>
				<App/>
				<Footer/>
			</div>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Layout store={store}/>
	</Provider>,
	document.getElementById('app')
);
