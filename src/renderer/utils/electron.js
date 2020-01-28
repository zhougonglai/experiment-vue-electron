import ipc from 'electron-ipc-extra';

export default {
	entoChannel(id) {
		console.log('ipc.send', id);
		return ipc.send('entoChannel', id);
	},
};
