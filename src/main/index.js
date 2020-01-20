import { EventEmitter } from 'node';
import { app, protocol } from 'electron';

import ExceptionHandler from '@/electron/core/ExceptionHandler';

export default class extends EventEmitter {
	constructor() {
		super();
		protocol.registerSchemesAsPrivileged([
			{ scheme: 'nn', privileges: { secure: true, standard: true } },
		]);
		this.init();
	}

	init() {
		this.exception = new ExceptionHandler();
	}
}
