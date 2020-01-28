import { EventEmitter } from 'events';
import ipc from 'electron-ipc-extra';
import WindowManager from './WindowManager';

export default class extends EventEmitter {
	constructor() {
		super();
		this.init();
	}

	init() {
		this.windowManager = new WindowManager();
		this.eventsManager();
	}

	eventsManager() {
		ipc.on('entoChannel', async channel => {
			this.showPage({ name: 'channel', path: `room/${channel}` });
			return 'reply data';
		});
	}

	showPage(page = 'default', options) {
		return this.windowManager.openWindow(page, options);
	}
}
