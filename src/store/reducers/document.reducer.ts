import { UserStatus } from '../../enums';

// import { Document } from '../../models';
import { FETCH_DOCUMENTS_SUCCESS } from '../types';

const initialState = {
	searchedDocuments: []
};

export default function documentReducer(state = initialState, { type, payload }:any) {
	switch (type) {
		case FETCH_DOCUMENTS_SUCCESS:
            return {
                ...state,
                searchedDocuments: payload
            };
		default:
			return state;
	}
}
