import { LIST_TASK_SUCCESS, LIST_TASK_FAIL, LIST_USER_SUCCESS, LIST_USER_FAIL } from './../constants/actionTypes';

const initialState = {
    data: [],
    users: [],
    loading: false,
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LIST_TASK_SUCCESS:
            return {
                ...state,
                data: payload
            };
        case LIST_USER_SUCCESS:
            return {
                ...state,
                users: payload
            }
        default:
            return state;
    }
}
