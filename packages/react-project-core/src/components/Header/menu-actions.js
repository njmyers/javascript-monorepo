/* 
	Animate Menu Worksheet Instructions 
	Create new style updates by creating  animateMenu actions
	Object should contain properties to update
	We use rest operator to add properties so be sure to cancel or
	Reset properties that need to be overridden

	{ 
		left: -9999px
	}

	then

	{
		left: null
	}
*/

export const menuOn = () => ({ type: 'MENU_ON' });
export const menuOff = () => ({ type: 'MENU_OFF' });
export const menuState = (payload) => ({
  type: 'MENU_STATE',
  key: 'isMenuOn',
  payload,
});
export const animateMenu = (payload) => ({
  type: 'ANIMATE_MENU',
  key: 'mobileMenuStyle',
  payload,
});
export const setOrientation = (payload) => ({
  type: 'ORIENTATION',
  key: 'orientation',
  payload,
});
export const setMobile = (payload) => ({
  type: 'DEVICE',
  key: 'isMobile',
  payload,
});

export const opacityZero = animateMenu({
  opacity: 0,
});

export const opacityOne = animateMenu({
  opacity: 1,
});

export const moveMenuOffScreen = animateMenu({
  position: 'absolute',
  left: '-9999px',
  opacity: 0,
});

export const moveMenuOnScreen = animateMenu({
  position: 'fixed',
  left: '0',
});
