import { Toast } from "native-base";

export function ToastMsg(text='', duration=4000, position='bottom', type=null) {
	Toast.show({
        text: text,
        buttonText: "",
        duration: duration,
        position: position,
        type: type
    })
};