import { UserStatus } from '../../enums';

import { User } from '../../models';
import { USER_INIT, USER_SUCCESS, USER_FAILED, USER_RESET } from '../types';

const initialState: User = {
	data: {
        token: '',
        user: {
            id: 0,
            email: '',
            name_first: '',
            name_last: '',
        }
    },
    error: ''
};

export default function userReducer(state = initialState, { type, payload }:any) {
	switch (type) {
		case USER_INIT:
            return {
                ...state,
                data: initialState.data,
                error: '',
            };
        case USER_SUCCESS:
            return {
                ...state,
                data: { ...state.data, token: payload },
                error: '',
            };
        case USER_FAILED:
            return {
                ...state,
                data: initialState.data,
                error: payload,
            };
		default:
			return state;
	}
}
