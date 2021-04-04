import axios from "axios";

function headerConfig(contentType, auth) {
	const header = {};
	if (contentType && typeof contentType === "string") {
		header["Content-Type"] = contentType;
	} else {
		header["Content-Type"] = "application/json";
	}

	if (auth === true) {
			header.AuthToken = "YBwL8oyPOV9pAknVg2p7j2DtqcHHAWTo";
	    }
	return header;
}

export default ({ contentType, auth }) => axios.create({
	baseURL: 'https://devza.com/tests/tasks',
	headers: headerConfig(contentType, auth )
});


