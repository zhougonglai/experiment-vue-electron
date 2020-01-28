import { EventEmitter } from 'events';
import { app, protocol } from 'electron';

import ExceptionHandler from './core/ExceptionHandler';
import Application from './core/Application';
const isDevelopment = process.env.NODE_ENV !== 'production';

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

		if (isDevelopment) {
			if (process.platform === 'win32') {
				process.on('message', data => {
					if (data === 'graceful-exit') {
						app.quit();
					}
				});
			} else {
				process.on('SIGTERM', () => {
					app.quit();
				});
			}
		}
		app
			.on('window-all-closed', () => {
				if (process.platform !== 'darwin') {
					app.quit();
				}
			})
			.on('ready', () => {
				global.application = new Application();
				global.application.showPage();
			})
			.on('activate', () => {
				console.log('activate');
				global.application.showPage();
			});
	}
}
