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
    ADD_NEW_CLIENT(state: IClientsState, client: IClientModel) {
      state.clientsArr.push(client);
    },
    REMOVE_CLIENT(state: IClientsState, removedId: IClientModel["id"]) {
      state.clientsArr = state.clientsArr.filter((client) => {
        return client.id !== removedId;
      });
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
        const data: IClientModel = await fetch(
          "http://localhost:3091/clients",
          {
            method: "POST",
            body: JSON.stringify(client),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((response) => response.json());
        store.commit("ADD_NEW_CLIENT", data);
      } catch (e) {
        console.error(e);
      }
    },
    async removeClientAction(store: IContext, id: IClientModel["id"]) {
      try {
        await fetch(`http://localhost:3091/clients/${id}`, {
          method: "DELETE",
        }).then((response) => response.json());
        store.commit("REMOVE_CLIENT", id);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
