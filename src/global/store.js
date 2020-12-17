import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

import authReducer from "./reducers/auth";

const logger = createLogger();
const enchancer = applyMiddleware(logger,promiseMiddleware);

const globalStore = createStore(authReducer, enchancer)

export default globalStore;