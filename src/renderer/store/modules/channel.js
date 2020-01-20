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
