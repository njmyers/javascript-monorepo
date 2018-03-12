import React from 'react';
import './socials-default.sass';

const Icon = ({ fa = 'home', link = '', size = '2x' } = {}) => {
	const iconClass = `fa fa-${fa} fa-${size} socials__icon`;

	return (
		<a href={link} className="socials__link" target="_blank" rel="noreferrer noopener">
			<i className={iconClass} />
		</a>
	);
};

const Socials = ({ socialMap }) => {
	const socials = socialMap.map((social) => (
		<Icon key={social.link} fa={social.icon} link={social.link} />
	));

	return (
		<p className="socials">
			<span className="socials__text">Find us on </span>
			{socials}
		</p>
	);
};

export default Socials;
