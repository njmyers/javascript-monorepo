import React, { Component } from 'react';
import './title-default.sass';

const Title = ({ text } = {}) => {
	const spans = text
		.split('')
		.map((letter, index) => <span key={'letter-' + index}>{letter}</span>);
	return <h1 className="title-text">{spans}</h1>;
};

export default Title;
