import { StatusBar } from 'expo-status-bar';
import { PixelRatio, Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { useFonts, K2D_400Regular } from '@expo-google-fonts/k2d'

const calculateTitleSize = (width) => {
	const minSize = 100;
	const maxSize = 160;

	if (width <= 500) {
		return minSize;
	} else if (width >= 1000) {
		return maxSize;
	} else {
		return minSize + ((width - 500) / (1000 - 500) * (maxSize - minSize));
	}
}

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

export default function App() {
	let [_] = useFonts({ K2D_400Regular });

	let deviceDimensions = Dimensions.get('window');

	let inputWidth = Math.max(400, Math.min(deviceDimensions.width * 0.6, 600));
	let titleSize = calculateTitleSize(deviceDimensions.width);

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={[styles.title, {
					fontSize: titleSize
				}]}>QYL</Text>
			</View>

			<View style={styles.loginSection}>
				<Text style={styles.loginSubheading}>HAC Login</Text>

				<View style={styles.loginInputs}>
					<TextInput style={[styles.inputField, {
						width: inputWidth
					}]} placeholder='Username' />

					<TextInput style={[styles.inputField, {
						width: inputWidth
					}]} placeholder='Username' />
				</View>
			</View>

			<View style={styles.loginButtonContainer}>
				<Pressable style={[styles.loginButton, {
					width: inputWidth
				}]}>
					<Text style={styles.loginButtonText}>Login</Text>
				</Pressable>
			</View>

			<StatusBar style="auto" />
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#15151A',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},

	titleContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},

	title: {
		textTransform: 'uppercase',
		fontSize: 100,
		fontWeight: '700',
		fontFamily: 'K2D_400Regular',
		color: '#BAC0FF',
	},

	loginSection: {
		paddingTop: 50,
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		rowGap: 15
	},

	loginSubheading: {
		fontSize: 20,
		color: '#C9BADD'
	},

	loginInputs: {
		display: 'flex',
		flexDirection: 'column',
		rowGap: 20
	},

	inputField: {
		backgroundColor: 'rgb(15, 15, 17)',
		height: 35,
		borderRadius: 10,
		paddingLeft: 15,
		color: '#C3C3C3',
		fontWeight: '300'
	},

	loginButtonContainer: {
		flex: 0.45
	},

	loginButton: {
		backgroundColor: '#5B0DBE',
		height: 65,
		borderRadius: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	loginButtonText: {
		color: '#FFFFFF',
		fontWeight: '500',
		fontSize: getFontSize(25)
	}
});
