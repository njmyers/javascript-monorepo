function actionCreator({ type, key, value } = {}) {
    // must use thischeck as you may need to pass a falsey values
    if (value !== undefined && key) {
        // for actions with predetermined values
        return () => {
            return {
                type,
                value,
                key,
            };
        };
    } else if (key === undefined) {
        // actions with dynamic keys and values
        return (payload, key) => {
            return {
                type,
                key,
                payload,
            };
        };
    } else {
        // actions with dynamic values
        return (payload) => {
            return {
                payload,
                type,
                key,
            };
        };
    }
}

function camelCase(constant) {
    const regex = /[A-Z]+\_?/gi;

    const camel = constant.replace(regex, (match, index) => {
        const word = match.replace('_', '');

        if (index === 0) {
            return word.toLowerCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
        }
    });

    return camel;
}

export default function generateActions(actionArr, prefix) {
    const constants = {};
    const actions = {};

    // generate constants
    actionArr.forEach((action) => {
        const { type, key, value } = action;

        const constant = prefix ? `${prefix}_${type}` : type;
        constants[constant] = constant;

        const functionName = camelCase(constant);
        actions[functionName] = actionCreator({
            type: constant,
            key,
            value,
        });

        if (process.env.NODE_ENV === 'development') console.log(constant, functionName);
    });

    return { constants, actions };
}
