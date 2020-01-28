import ChannelService from '@services/channel';

const channelService = new ChannelService();

const types = chat => `CHANNEL_${chat}`;

const state = {
	channels: [],
};

const actions = {
	async getChannels({ commit }) {
		const { data } = await channelService.getChannels();
		commit(types('LIST'), data.list);
	},
	async entoChannel() {
		if (process.env.IS_ELECTRON) {
			const platform = (await import('./electron')).default;
			platform.entoChannel();
		} else {
			const platform = (await import('./web')).default;
			platform.entoChannel();
		}
	},
};

const mutations = {
	[types('LIST')](state, data) {
		state.channels = data;
	},
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
};
