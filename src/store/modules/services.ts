import { ActionContext } from "vuex";
import { IState } from "@/store";
import { IClientModel } from "@/store/modules/clients";

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
    ADD_NEW_SERVICE(state: IServiceState, service: IServiceModel) {
      state.servicesArr.push(service);
    },
    REMOVE_SERVICE(state: IServiceState, removedId: IServiceModel["id"]) {
      state.servicesArr = state.servicesArr.filter((service) => {
        return service.id !== removedId;
      });
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
    async addServiceAction(store: IContext, service: IServiceModel) {
      try {
        const data: IClientModel = await fetch(
          "http://localhost:3091/services",
          {
            method: "POST",
            body: JSON.stringify(service),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((response) => response.json());
        store.commit("ADD_NEW_SERVICE", data);
      } catch (e) {
        console.error(e);
      }
    },
    async removeServiceAction(store: IContext, id: IServiceModel["id"]) {
      try {
        await fetch(`http://localhost:3091/services/${id}`, {
          method: "DELETE",
        }).then((response) => response.json());
        store.commit("REMOVE_SERVICE", id);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
