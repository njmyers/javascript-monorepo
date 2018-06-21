import validateDecimal from '../validate-decimal';

test('validate decimal', () => {
	expect(validateDecimal(80)).toBe(80);
});

test('validate decimal string', () => {
	expect(validateDecimal('80')).toBe(80);
});

test('validate additive string that would otherwise be coerced to wrong value', () => {
	// normal javascript
	expect('22' + '4').toBe('224');

	// validated addition
	expect(validateDecimal('22') + validateDecimal('4')).toBe(26);
});

test('validate NaN', () => {
	expect(validateDecimal(NaN)).toBe(NaN);
});

test('validate undefined', () => {
	expect(validateDecimal(undefined)).toBe(0);
});

test('validate null', () => {
	expect(validateDecimal(undefined)).toBe(0);
});
