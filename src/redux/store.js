import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import logger from "redux-logger";
import itemsReducer from "./reducers/itemsReducer.js";

// Pass in more reducers if needed
const reducer = {
	items: itemsReducer,
};

const middleware = [...getDefaultMiddleware(), logger];

// const preloadedState = {
// 	items: [],
// };

// Configure store and add options
const store = configureStore({
	reducer,
	middleware,
	devTools: process.env.NODE_ENV !== "production",
	// You can pass in preloadedState here and enhancers
	// preloadedState,
});

export default store;
