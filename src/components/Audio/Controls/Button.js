import React from 'react';

const Button = ({ icon = 'play', size = 'lg', className = 'audio-button', cb } = {}) => {
	const faClass = `fa fa-${icon} fa-${size}`;
	const classes = `${className} ${faClass}`;

	return <button className={classes} onClick={cb} />;
};

export default Button;
