import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
} from 'react-native-reanimated';

import Service from '../screens/Service';
import Landing from '../screens/Landing';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
	const [progress, setprogress] = useState(new Animated.Value(0));

	const scale = Animated.interpolateNode(progress, {
		inputRange: [0, 1],
		outputRange: [1, 0.8],
	});

	const borderRadius = Animated.interpolateNode(progress, {
		inputRange: [0, 1],
		outputRange: [0, 26],
	});

	const animatedStyle = {
		borderRadius,
		transform: [
			{
				scale,
			},
		],
	};

	return (
		<View style={styles.CustomDrawerContainer}>
			<Drawer.Navigator
				drawerType='slide'
				initialRouteName='MainLayout'
				overlayColor='transparent'
				drawerStyle={{
					flex: 1,
					width: '65%',
					height: '100%',
					backgroundColor: 'transparent',
					paddingRight: 20,
				}}
				sceneContainerStyle={{
					backgroundColor: 'transparent',
				}}
				drawerContent={(props) => {
					setTimeout(() => {
						setprogress(props.progress);
					}, 0);

					return <CustomDrawerContent navigation={props.navigation} />;
				}}
			>
				<Drawer.Screen name='Landing'>
					{(props) => (
						<Landing {...props} drawerAnimationStyle={animatedStyle} />
					)}
				</Drawer.Screen>

				<Drawer.Screen name='Service'>
					{(props) => (
						<Service {...props} drawerAnimationStyle={animatedStyle} />
					)}
				</Drawer.Screen>
			</Drawer.Navigator>
		</View>
	);
};

export default CustomDrawer;

const styles = StyleSheet.create({
	CustomDrawerContainer: {
		flex: 1,
		backgroundColor: '#1e1c1c',
	},
});
