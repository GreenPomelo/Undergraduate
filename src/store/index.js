import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/index";
const middleware = [promiseMiddleware, createLogger()];
export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  return store;
}
