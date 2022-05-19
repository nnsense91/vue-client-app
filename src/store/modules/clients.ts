export default {
  namespaced: true,
  state: {
    clients: [],
  },
  mutations: {
    SET_CLIENTS(state: any, clientsArr: any) {
      state.clients.push(clientsArr);
    },
  },
  actions: {
    async getClientsAction(store: any) {
      try {
        const data = await fetch("http://localhost:3091/clients").then(
          (response) => response.json()
        );
        store.commit("SET_CLIENTS", data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
