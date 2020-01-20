import Request from '@utils/fetch';

export default class {
	constructor() {
		this.request = new Request(process.env.VUE_APP_BASE);
	}

	getChannels() {
		return this.request.post('api/v2/channel/index/list', {
			last_id: 0,
			limit: 8,
			category_id: 0,
			tag_id: 0,
			sort_type: 1,
		});
	}
}
