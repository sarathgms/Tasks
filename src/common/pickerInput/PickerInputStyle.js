import { StyleSheet, Dimensions } from 'react-native';
// import { fontFamily } from './../../fontfamily/fontfamily';

module.exports = StyleSheet.create({
	PickerInput: {
		marginBottom: 20
	},
	fieldFont: {
		fontSize: 16,
	},
	label: {
		fontSize: 14,
		paddingLeft: 10,
		paddingBottom: 5,
		color: '#FFFFFF',
	},
	fieldBorder: {
		paddingLeft: 10,
		borderRightWidth: 0.67,
		borderLeftWidth: 0.67,
		borderTopWidth: 0.67,
		borderBottomWidth: 0.67,
		borderColor: '#ddd',
		backgroundColor: '#fff',
		minHeight: 42,
		borderRadius: 50
	}
});