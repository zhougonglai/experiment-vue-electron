export default {
	platform(pre) {
		return process.env.IS_ELECTRON ? `${pre}electron` : `${pre}web`;
	},
};
