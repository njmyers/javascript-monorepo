import React, { Component } from 'react';
import './title-default.sass';

class Title extends Component {
	constructor(props) {
		super(props);
		this.text = this.props.text;
	}

	letterizer() {
		let arr = this.text.split('');
		let i = 0;
		let spanner = arr.map(function(letter) {
			i += 1;
			return <div key={i}>{letter}</div>;
		});
		return spanner;
	}

	render() {
		let arr = this.letterizer();
		return <div className="title-text">{arr}</div>;
	}
}

export default Title;
