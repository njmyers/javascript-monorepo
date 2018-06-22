const initialMobileMenu = {
  position: 'absolute',
  left: '-9999px',
  opacity: 0,
};

const initialMenu = {
  styles: '',
  mobileMenuStyle: initialMobileMenu,
  desktopMenuStyle: initialMobileMenu,
  isMenuOn: false,
  isMobile: true,
};

const menuReducer = (state = initialMenu, action) => {
  switch (action.type) {
    case 'DEVICE':
    case 'ORIENTATION':
    case 'MENU_STATE':
      return {
        ...state,
        [action.key]: action.payload,
      };
    case 'ANIMATE_MENU':
      return {
        ...state,
        mobileMenuStyle: { ...state.mobileMenuStyle, ...action.payload },
      };
    default:
      return state;
  }
};

export default menuReducer;
