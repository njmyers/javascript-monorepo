import generateActions from '../../utils/action-creator';

/* 
	Animate Menu Worksheet Instructions 
	Create new style updated by binding animateMenu to new object
	Object should contain properties to update
	We use rest operator to add properties so be sure to cancel or
	Reset properties that need to be overridden

	{ 
		top: -9999px
	}

	then

	{
		top: null
	}
*/

const myActions = [
	{
		type: 'SHOW_MENU',
		key: 'isMenuOn',
		value: true,
	},
	{
		type: 'HIDE_MENU',
		key: 'isMenuOn',
		value: false,
	},
	{
		type: 'ANIMATE_MENU',
		key: 'mobileMenuStyle',
	},
	{
		type: 'IS_MOBILE',
		key: 'isMobile',
		value: true,
	},
	{
		type: 'IS_NOT_MOBILE',
		key: 'isMobile',
		value: false,
	},
	{
		type: 'IS_LANDSCAPE',
		key: 'orientation',
		value: 'landscape',
	},
	{
		type: 'IS_PORTRAIT',
		key: 'orientation',
		value: 'portrait',
	},
];

const { constants, actions } = generateActions(myActions);

/**
 * Create Menu Button
 * @param  {Array}  options.first   Function or Array of Functions
 * @param  {Array}  options.second  Function or Array of Functions
 * @param  {Array}  options.third   Function or Array of Functions
 * @param  {Number} options.timeout Timeout between calls
 * @return {null}                   No return value
 */
function menuButton({ first = [], second = [], third = [], timeout }) {
	return () => {
		return (dispatch) => {
			if (typeof first === 'function') dispatch(first());
			else if (Array.isArray(first)) {
				for (let cb of first) {
					if (typeof cb === 'function') dispatch(cb.call());
				}
			}
			setTimeout(() => {
				if (typeof second === 'function') dispatch(second());
				else if (Array.isArray(second)) {
					for (let cb of second) {
						if (typeof cb === 'function') dispatch(cb.call());
					}
				}
			}, timeout);
			if (third) {
				setTimeout(() => {
					if (typeof third === 'function') dispatch(third());
					else if (Array.isArray(third)) {
						for (let cb of third) {
							if (typeof cb === 'function') dispatch(cb.call());
						}
					}
				}, timeout);
			}
		};
	};
}

const opacityZero = actions.animateMenu.bind(null, {
	opacity: 0,
});

const opacityOne = actions.animateMenu.bind(null, {
	opacity: 1,
});

const moveMenuOffScreen = actions.animateMenu.bind(null, {
	position: 'absolute',
	top: '-9999px',
	left: '-9999px',
	opacity: 0,
});

const moveMenuOnScreen = actions.animateMenu.bind(null, {
	position: 'fixed',
	top: null,
	left: null,
});

const menuOn = menuButton({
	first: moveMenuOnScreen,
	second: [actions.showMenu, opacityOne],
	timeout: 0,
});

const menuOff = menuButton({
	first: opacityZero,
	second: [moveMenuOffScreen, actions.hideMenu],
	timeout: 500,
});

function windowDetector(width, height) {
	return (dispatch) => {
		width >= 768 ? dispatch(actions.isNotMobile()) : dispatch(actions.isMobile());
		width > height ? dispatch(actions.isLandscape()) : dispatch(actions.isPortrait());
	};
}

export { menuOn, menuOff, windowDetector, constants as mobileConstants };
