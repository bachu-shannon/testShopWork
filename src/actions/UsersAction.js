import {
	GET_USERS_REQUEST,
	UPDATE_USERS_REQUEST
} from '../constants/actionTypes';

export function getDataRequest(data) {
	return {
		type: GET_USERS_REQUEST,
		payload: {
			data,
			fetched: true
		}
	}
}

export function updateDataRequest(data) {
	console.log(data);
	return {
		type: UPDATE_USERS_REQUEST,
		payload: {
			data
		}
	}
}