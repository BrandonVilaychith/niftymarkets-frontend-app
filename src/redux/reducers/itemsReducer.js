// Example action
// const increment = createAction('increment')

import { createReducer } from "redux-starter-kit";

const itemsReducer = createReducer(["hello"], {
	// Example actions usage
	// [increment]: (state, action) => state + action.payload
});

export default itemsReducer;
