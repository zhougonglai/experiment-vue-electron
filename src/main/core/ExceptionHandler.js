import { app, dialog } from 'electron';
import logger from 'electron-log';

const defaults = {
	showDialog: process.env.NODE_ENV !== 'developer',
};

export default class ExceptionHandler {
	constructor(options) {
		this.options = {
			...defaults,
			...options,
		};

		this.setup();
	}

	setup() {
		if (process.env.NODE_ENV === 'developer') {
			return;
		}

		const { showDialog } = this.options;
		process.on('uncaughtException', err => {
			const { message, stack } = err;
			logger.error(`[NN] Uncaught exception: ${message}`);
			logger.error(stack);

			if (showDialog && app.isReady()) {
				dialog.showErrorBox('Error: ', message);
			}
		});
	}
}
