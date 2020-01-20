'use strict';

// import Launcher from '@/electron';

// if (process.env.NODE_ENV !== 'development') {
// 	global.__static = require('path')
// 		.join(__dirname, '/static')
// 		.replace(/\\/g, '\\\\');
// }

// global.launcher = new Launcher();

import { app, protocol, BrowserWindow } from 'electron';
import {
	createProtocol,
	installVueDevtools,
} from 'vue-cli-plugin-electron-builder/lib';
const isDevelopment = process.env.NODE_ENV !== 'production';

let win;

protocol.registerSchemesAsPrivileged([
	{ scheme: 'app', privileges: { secure: true, standard: true } },
]);

function createWindow() {
	win = new BrowserWindow({
		width: 1400,
		height: 800,
		minWidth: 1200,
		minHeight: 600,
		show: false,
		frame: false,
		transparent: true,
		titleBarStyle: 'hidden',
		webPreferences: {
			nodeIntegration: true,
		},
	});

	if (process.env.WEBPACK_DEV_SERVER_URL) {
		win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
		if (!process.env.IS_TEST) {
			win.webContents.openDevTools();
		}
	} else {
		createProtocol('app');
		win.loadURL('app://./index.html');
	}

	win.once('ready-to-show', () => {
		win.show();
	});

	win.on('closed', () => {
		win = null;
	});
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});

app.on('ready', async () => {
	// && !process.env.IS_ELECTRON
	if (isDevelopment) {
		await installVueDevtools();
	}
	createWindow();
});

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
