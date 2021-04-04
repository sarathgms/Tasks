import { TOAST_MSG, SHOW_LOADER } from "../constants/actionTypes";

export function handeTaostMsg(variant = "", msg = "") {
	return (dispatch) => {
		dispatch({
			type: TOAST_MSG,
			payload: {
				variant,
				msg
			}
		});
	};
}

export function handeErrorMsg(errors) {
	return (dispatch) => {
		const erMsg = errors;
		delete erMsg.status;
		delete erMsg.code;
		Object.keys(erMsg).map((key) => dispatch(handeTaostMsg("error", erMsg[key])));
	};
}

export function handleLoader(value = false, isList = false) {
	return (dispatch) => {
		dispatch({
			type: SHOW_LOADER,
			payload: {
				value,
				isList
			}
		});
	};
}
