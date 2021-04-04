import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
	inputField: {
		marginBottom: 10
	},
	fieldFont: {
		fontSize: 16,
	},
	bigFont: {
		fontSize: 32,
		lineHeight: 32,
		letterSpacing: 16,
		textAlign: 'center'
	},
	label: {
		fontSize: 14,
		paddingLeft: 15,
		paddingBottom: 5,
		color: '#FFFFFF',
	},
	inputItem: {
		minHeight: 50
	},
	fieldBorder: {
		paddingLeft: 5,
		borderRadius: 50,
		borderWidth: 0.67,
		borderColor: '#ddd',
		backgroundColor: '#fff'
	},
	singleBdr: {
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		backgroundColor: 'transparent',
		minHeight: 58
	},
	errorMsg: {
		textAlign: 'right',
		color: '#ff2400',
		fontSize: 12,
		position: 'absolute',
		top: 5,
		right: 5
	},
	astricks: {
		color: '#969696'
	},
	center: {
		paddingTop: 10,
		textAlign: 'center'
	}
});