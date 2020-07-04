import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index.js";

const initialState = {};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  initialState,
  process.env.NODE_ENV !== "production" && window.devToolsExtension
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
);

export const persistor = persistStore(store);
