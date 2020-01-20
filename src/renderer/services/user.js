import Request from '@utils/fetch';

export default class UserRequest {
	request;
	constructor() {
		this.request = new Request(process.env.VUE_APP_BASE);
	}

	getUserInfo() {
		return this.request.get('base/user');
	}
}
