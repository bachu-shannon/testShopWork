import {
	GET_USERS_REQUEST,
	UPDATE_USERS_REQUEST
} from '../constants/actionTypes';

const initialState = {
    data: [],
    fetched: false,
};

export default function getUsers(state = initialState, action) {
	switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                ...action.payload
            };
        case UPDATE_USERS_REQUEST:
			return {
				...state, ...{data: action.payload.data}
			};

		default:
            return state;
    }
}