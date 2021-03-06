import { EDUCATOR_FAIL, EDUCATOR_LIST_FAIL, EDUCATOR_LIST_REQUEST, EDUCATOR_LIST_SUCCESS, EDUCATOR_LOGIN_FAIL, EDUCATOR_LOGIN_REQUEST, EDUCATOR_LOGIN_SUCCESS, EDUCATOR_LOGOUT, EDUCATOR_REGISTER_FAIL, EDUCATOR_REGISTER_REQUEST, EDUCATOR_REGISTER_SUCCESS, EDUCATOR_REQUEST, EDUCATOR_SUCCESS } from "../constants/constants";

export const educatorAuthReducer = (state = {}, action) => {
	switch (action.type) {
		case EDUCATOR_LOGIN_REQUEST:
			return { loading: true };
		case EDUCATOR_LOGIN_SUCCESS:
			return { loading: false, educatorInfo: action.payload };
		case EDUCATOR_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case EDUCATOR_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const educatorRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case EDUCATOR_REGISTER_REQUEST:
			return { loading: true };
		case EDUCATOR_REGISTER_SUCCESS:
			return { loading: false, educatorInfo: action.payload };
		case EDUCATOR_REGISTER_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const educatorFetch = (state = {}, action) => {
	switch (action.type) {
		case EDUCATOR_REQUEST:
			return { loading: true };
		case EDUCATOR_SUCCESS:
			return { loading: false, educatorDetails: action.payload };
		case EDUCATOR_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const educatorFetchList = (state = {}, action) => {
	switch (action.type) {
		case EDUCATOR_LIST_REQUEST:
			return { loading: true };
		case EDUCATOR_LIST_SUCCESS:
			return { loading: false, educatorList: action.payload };
		case EDUCATOR_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};