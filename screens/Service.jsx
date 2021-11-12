import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { Entypo } from '@expo/vector-icons';

function Services({ drawerAnimationStyle, navigation }) {
	return (
		<Animated.View style={[styles.Container, drawerAnimationStyle]}>
			<TouchableOpacity
				style={styles.BurgerMenu}
				onPress={() => navigation.toggleDrawer()}
			>
				<Entypo name='menu' size={34} color='#0D0D19' />
			</TouchableOpacity>

			<Text style={{ fontSize: 30 }}>Our Services</Text>
		</Animated.View>
	);
}

export default Services;

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
