const cmp = require('./comparator');
const assert = require('assert');
for (var i = 0; i < 400; i++) assert(cmp.test());