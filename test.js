'use strict';
var test = require('ava');
Math.clz32 = undefined;
var clz32 = require('./');

test(function (t) {
	t.assert([
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
	].filter(function (x) {
		return clz32(x) !== 32;
	}).length === 0);
	t.assert(clz32() === 32);
	t.assert(clz32(0) === 32);
	t.assert(clz32(1) === 31);
	t.assert(clz32(1000) === 22);
	t.assert(clz32(true) === 31);
	t.assert(clz32(3.5) === 30);
	t.assert(clz32(-1) === 0);
	t.assert(clz32(0.5) === 32);
	t.assert(clz32(2 ^ 32 - 1) === 27);
	t.assert(clz32(2 ^ 32) === 26);
	t.end();
});
