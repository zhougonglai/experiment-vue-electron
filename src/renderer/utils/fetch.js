export default class Request {
	init = {
		mode: 'cors',
		// credentials: 'include',
	};

	constructor(baseUrl) {
		this.baseUrl = baseUrl;
		this.controller = new AbortController();
	}

	get(path, params, requestInit) {
		const { signal } = this.controller;
		return fetch(
			this.baseUrl + path + '?' + new URLSearchParams(params).toString(),
			{
				signal,
				...this.init,
				...requestInit,
			},
		).then(this.check);
	}

	post(path, body, requestInit) {
		const { signal } = this.controller;
		return fetch(this.baseUrl + path, {
			method: 'POST',
			body: JSON.stringify(body),
			'Content-Type': 'application/json', // application/x-www-form-urlencoded
			signal,
			...this.init,
			...requestInit,
		}).then(this.check);
	}

	put(path, formData, requestInit) {
		const { signal } = this.controller;
		return fetch(this.baseUrl + path, {
			method: 'PUT',
			body: formData,
			signal,
			...this.init,
			...requestInit,
		}).then(this.check);
	}

	abort() {
		return this.controller.abort();
	}

	check(response) {
		if (response.ok) {
			return response.json();
		} else {
			// bad response
			const error = new Error(response.statusText);
			error.response = response;
			throw error;
		}
	}
}
