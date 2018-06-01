import equals from 'deep-equal';
export default equals;

// const isObject = (val) => typeof val === 'object' && val !== null;

// const equals = (actual, expected) => {
// 	let result = true;

// 	// Check if input is object or primitive
// 	if (isObject(actual)) {
// 		const keys = Object.keys(actual);
// 		for (let i = 0; i < keys.length; i++) {
// 			const value = actual[keys[i]];
// 			const compare = expected[keys[i]];
// 			// Check for NaN
// 			if (Number.isNaN(value) && Number.isNaN(compare)) result = result;
// 			else if (isObject(value))
// 				// Recursively check for objects and arrays but ignore null values
// 				result = equals(value, compare) ? result : false;
// 			else
// 				// check for primitive equalities
// 				result = value === compare ? result : false;
// 		}
// 	} else
// 		// compare primitive inputs
// 		result = actual === expected ? result : false;

// 	return result;
// };

// export default equals;
