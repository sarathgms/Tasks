import {
	 TOAST_MSG, SHOW_LOADER 
} from "./../constants/actionTypes";

const initialSettings = {
	toastMsg: null,
	showLoader: {
		value: false,
		isList: false
	}
	 
};

export default function (state = initialSettings, action) {
	switch (action.type) {
	case TOAST_MSG:
		return {
			...state,
			toastMsg: action.payload
		};
	case SHOW_LOADER:
		return {
			...state,
			showLoader: action.payload
		};
	default:
		return state;
	}
};


