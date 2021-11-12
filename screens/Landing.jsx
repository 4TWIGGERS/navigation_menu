import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { Entypo } from '@expo/vector-icons';

function Landing({ drawerAnimationStyle, navigation }) {
	return (
		<Animated.View style={[styles.Container, drawerAnimationStyle]}>
			<TouchableOpacity
				style={styles.BurgerMenu}
				onPress={() => navigation.toggleDrawer()}
			>
				<Entypo name='menu' size={34} color='#0D0D19' />
			</TouchableOpacity>

			<Text style={{ fontSize: 30 }}>Landing Screen</Text>
		</Animated.View>
	);
}

export default Landing;

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},

	BurgerMenu: {
		top: 50,
		left: 15,
		position: 'absolute',
	},
});
