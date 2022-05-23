import { ActionContext } from "vuex";
import { IState } from "@/store";

type IContext = ActionContext<IServiceState, IState>;

export interface IServiceModel {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface IServiceState {
  servicesArr: IServiceModel[];
}

export default {
  namespaced: true,
  state: {
    servicesArr: [],
  },
  mutations: {
    SET_SERVICES(state: IServiceState, servicesArr: IServiceModel[]) {
      state.servicesArr = servicesArr;
    },
  },
  actions: {
    async getServicesAction(store: IContext) {
      try {
        const data = await fetch("http://localhost:3091/services").then(
          (response) => response.json()
        );
        store.commit("SET_SERVICES", data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
