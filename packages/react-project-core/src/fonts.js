import WebFont from 'webfontloader';

/**
const fonts = {
    google: {
        families: []
    },
    custom: {
        families: [],
        urls: []
    }
}
 */

const fonts = {
    google: {
        families: ['Raleway', 'Tangerine'],
    },
    custom: {
        families: ['FontAwesome'],
        urls: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'],
    },
};

WebFont.load(fonts);

export default WebFont;
