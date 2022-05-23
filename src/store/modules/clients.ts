import { ActionContext } from "vuex";
import { IState } from "@/store";

type IContext = ActionContext<IClientsState, IState>;

export interface IClientsState {
  clientsArr: IClientModel[];
}

export interface IClientModel {
  id: number;
  name: string;
  lastName: string;
}

export default {
  namespaced: true,
  state: {
    clientsArr: [],
  },
  mutations: {
    SET_CLIENTS(state: IClientsState, clientsArr: IClientModel[]) {
      state.clientsArr = clientsArr;
    },
  },
  actions: {
    async getClientsAction(store: IContext) {
      try {
        const data: IClientModel[] = await fetch(
          "http://localhost:3091/clients"
        ).then((response) => response.json());
        store.commit("SET_CLIENTS", data);
      } catch (e) {
        console.error(e);
      }
    },
    async addClientAction(store: IContext, client: IClientModel) {
      try {
        const data = await fetch("http://localhost:3091/clients", {
          method: "POST",
          body: JSON.stringify(client),
        }).then((response) => response.json());
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
