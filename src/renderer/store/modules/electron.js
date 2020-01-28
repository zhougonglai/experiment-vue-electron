import ipc from 'electron-ipc-extra';

export default {
	entoChannel() {
		console.log('ipc.send');
		ipc.send('entoChannel', 'entoChannel');
	},
};
