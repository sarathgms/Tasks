export const required = value => (value ? undefined : 'Required');

export const email = value =>
	(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
		'Invalid email address' : undefined);

export const FieldLevelValidation = (validate, value) => {
	let error = [];
	if (validate && validate.length > 0) {
		if (validate.includes('required')) {
			error.push(required(value));
		}
		if (validate.includes('email')) {
			error.push(email(value));
		}
	}
	return error;
};
