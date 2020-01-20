import Request from '@utils/fetch';

export default class {
	constructor() {
		this.request = new Request(process.env.VUE_APP_BASE);
	}

	getRooms() {
		return this.request.get('base/player');
	}
}
