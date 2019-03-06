import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return <div className="home" />;
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
