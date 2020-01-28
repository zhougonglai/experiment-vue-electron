export default {
	async entoChannel({ channel_no }) {
		const platform = require(process.env.IS_ELECTRON ? './electron' : './web')
			.default;
		await platform.entoChannel(channel_no);
	},
};
