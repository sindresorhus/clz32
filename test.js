import test from 'ava';

Math.clz32 = undefined;
const m = require('./');

test(t => {
	t.is([
		NaN,
		Infinity,
		-Infinity,
		0,
		-0,
		null,
		undefined,
		'foo',
		{},
		[]
	].filter(x => m(x) !== 32).length, 0);
	t.is(m(), 32);
	t.is(m(0), 32);
	t.is(m(1), 31);
	t.is(m(1000), 22);
	t.is(m(true), 31);
	t.is(m(3.5), 30);
	t.is(m(-1), 0);
	t.is(m(0.5), 32);
	t.is(m(2 ^ 32 - 1), 27);
	t.is(m(2 ^ 32), 26);
});
