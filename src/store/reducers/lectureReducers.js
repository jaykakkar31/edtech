import {
	ADD_LECTURE_FAIL,
	ADD_LECTURE_REQUEST,
	ADD_LECTURE_SUCCESS,
    GET_LECTURE_LIST_FAIL,
    GET_LECTURE_LIST_REQUEST,
    GET_LECTURE_LIST_SUCCESS,
} from "../constants/constants";

export const addLectureReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_LECTURE_REQUEST:
			return { loading: true, success: false, error: null };
		case ADD_LECTURE_SUCCESS:
			return { loading: false, success: true, lectures: action.payload };
		case ADD_LECTURE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const getLectureList = (state = {}, action) => {
	switch (action.type) {
		case GET_LECTURE_LIST_REQUEST:
			return { loading: true, success: false, error: null };
		case GET_LECTURE_LIST_SUCCESS:
			return { loading: false, success: true, lectures: action.payload };
		case GET_LECTURE_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
