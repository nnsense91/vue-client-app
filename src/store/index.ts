import { createStore } from "vuex";
import clientStore from "./modules/clients";

export default createStore({
  modules: { clientStore },
});
