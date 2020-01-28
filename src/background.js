'use strict';

import Launcher from './main/index';

if (process.env.NODE_ENV !== 'development') {
	global.__static = require('path')
		.join(__dirname, '/static')
		.replace(/\\/g, '\\\\');
}

global.launcher = new Launcher();
