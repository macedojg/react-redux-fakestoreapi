import { createStore } from "redux";
import reducersX from "./reducers";

const store = createStore(reducersX, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
