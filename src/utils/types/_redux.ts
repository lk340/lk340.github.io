import * as Context from "@/context";

export type Users = {
	[key: string]: Context.AuthForm.CurrentUser;
};

export type ReduxState = {
	entities: {
		users: Users;
	};
	session: Context.AuthForm.CurrentUser;
	errors: {
		session: any;
		users: any;
	};
};

// ============== //
// ↓↓↓ Action ↓↓↓ //
// ============== //

export type POJO = {
	type: string;
	[key: string]: any;
};

export type ActionCreatorErrors = string | ReducerErrors;

// =============== //
// ↓↓↓ Reducer ↓↓↓ //
// =============== //

export type StateErrors = StateCopyErrors | [];

export type StateCopyErrors = string | ReducerErrors;

export type ActionErrors = {
	[key: string]: any;
};

export type ReducerError = [string, [string]];

export type ReducerErrors = [string, string][];
