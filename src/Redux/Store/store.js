import { applyMiddleware, compose, createStore } from "redux";
import RootReducer from "../Reducers";
import thunk from "redux-thunk";

const store = createStore(RootReducer, compose(applyMiddleware(thunk)));

export default store;
