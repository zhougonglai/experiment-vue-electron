import { EventEmitter } from 'events';
import { BrowserWindow } from 'electron';
import {
	createProtocol,
	installVueDevtools,
} from 'vue-cli-plugin-electron-builder/lib';
const isDevelopment = process.env.NODE_ENV !== 'production';

const defaultConfig = {
	titleBarStyle: 'hiddenInset',
	show: false,
	width: 1400,
	height: 800,
	minWidth: 1200,
	minHeight: 600,
	frame: false,
	transparent: true,
	webPreferences: {
		nodeIntegration: true,
	},
};

export default class extends EventEmitter {
	constructor(options) {
		super();
		this.options = options;
		this.windows = {};
		if (isDevelopment) {
			installVueDevtools(true);
		}
	}

	/**
	 * @param {string | object} page 页面属性
	 * @param {*} options
	 */
	openWindow(page, options = {}) {
		if (typeof page === 'string') {
			if (page in this.windows) {
				this.windows[page].show();
				return this.windows[page];
			} else {
				this.createWindow({ name: page, path: '' }, options);
			}
		} else {
			this.createWindow(page, options);
		}
	}

	createWindow(pageOptions, options) {
		const window = new BrowserWindow({
			...defaultConfig,
			...options,
		});
		if (process.env.WEBPACK_DEV_SERVER_URL) {
			window.loadURL(process.env.WEBPACK_DEV_SERVER_URL + pageOptions.path);
			if (!process.env.IS_TEST) {
				window.webContents.openDevTools();
			}
		} else {
			createProtocol('nn');
			window.loadURL('nn://./index.html');
		}

		window.once('ready-to-show', () => {
			this.emit('ready', window.id);
			window.show();
			this.windows[pageOptions.name] = window;
		});

		window.on('close', () => {
			this.emit('close', window.id);
			this.windows[pageOptions.name] = null;
		});

		return window;
	}
}
