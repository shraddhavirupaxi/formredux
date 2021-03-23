const Validation = (values) => {
	let errors = {};
	if (!values.username) {
		errors.username = 'username is reqiured.';
	}
	if (!values.phone) {
		errors.phone = 'phone is reqiured.';
	} else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.phone)) {
		errors.phone = 'phone is invalid.';
	}
	if (!values.email) {
		errors.email = 'email is required.';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'email is invalid.';
	}
	if (!values.password) {
		errors.password = 'password is required';
	} else if (values.password.length < 5) {
		errors.password = 'password must be atleast 5 character.';
	}
	return errors;
};

export default Validation;
