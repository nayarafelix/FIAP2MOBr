import { StyleSheet } from 'react-native';
import { themeSchema } from '@utils';

const { theme } = themeSchema();

export const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#fff',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	member: {
		alignItems: 'center',
		marginBottom: 20,
	},
	memberImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	memberName: {
		marginTop: 10,
		fontSize: 18,
		fontWeight: 'bold',
	},
});
