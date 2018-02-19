import generateActions from '../utils/action-creator';

const myActions = [
	{
		type: 'UPDATE_CONTENT_SIZE',
	},
];

const { actions, constants } = generateActions(myActions);
const { updateContentSize } = actions;

export { updateContentSize, constants as UIConstants };
