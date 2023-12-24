import { createStore } from "redux";
import rootReducer from "./Shoes/rootReducer";

const store = createStore(rootReducer)

export default store