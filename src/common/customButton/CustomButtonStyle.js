import { StyleSheet, Dimensions } from 'react-native';

module.exports = StyleSheet.create({
	btn: {
		backgroundColor: '#EE4E4E',
		height: 50,
		width: '100%',
		borderRadius: 50,
		marginBottom: 20,
		marginTop: 10
	},
	trsBtn: {
		backgroundColor: 'transparent',
		height: 42,
		width: '100%',
		
	},
	disabled: {
		backgroundColor: '#ec928e'
	},
	cancel: {
		backgroundColor: '#AAA9A9',
		height: 42,
		width: '100%'
	},
	btnTxt: {
		color: '#fff',
		textAlign: 'center',
		width: '100%',
		fontSize: 18,
		fontWeight: 'bold'
	},
	trsBtnTxt: {
		color: '#0062bd',
		textAlign: 'center',
		width: '100%'
	},
	customFab: {
		backgroundColor: '#DA251D'
	},
	iconBtn: {
		width: 50,
		height: 50,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 0
	}
});