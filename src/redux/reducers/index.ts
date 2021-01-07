import * as Redux from "redux";

import { sessionReducer } from "./_session";
import { usersReducer } from "./_users";
import * as Errors from "./errors";

const entitiesReducer = Redux.combineReducers({
	users: usersReducer,
});

const errorsReducer = Redux.combineReducers({
	session: Errors.sessionErrorsReducer,
	users: Errors.usersErrorsReducer,
});

export const rootReducer = Redux.combineReducers({
	entities: entitiesReducer,
	session: sessionReducer,
	errors: errorsReducer,
});
