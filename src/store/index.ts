import { createStore } from "vuex";
import clientsStore, { IClientsState } from "./modules/clients";
import servicesStore, { IServiceState } from "./modules/services";

export interface IState {
  clientsStore: IClientsState;
  servicesStore: IServiceState;
}

export default createStore<IState>({
  modules: { clientsStore, servicesStore },
});
