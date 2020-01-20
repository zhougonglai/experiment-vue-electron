import RoomService from '@services/room';

const roomService = new RoomService();

const types = chat => `ROOM_${chat}`;

const state = {
	rooms: [],
};

const actions = {
	async getRooms({ commit }) {
		const { data } = await roomService.getRooms();
		commit(types('LIST'), data);
	},
};

const mutations = {
	[types('LIST')](state, data) {
		state.rooms = data;
	},
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
};
