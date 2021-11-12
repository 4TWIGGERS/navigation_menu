import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
	useFonts,
	OpenSans_400Regular,
	OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';

import CustomDrawer from './navigation/CustomDrawer';

const Stack = createStackNavigator();

export default function App({ navigation }) {
	let [fontsLoaded] = useFonts({
		OpenSans_400Regular,
		OpenSans_800ExtraBold,
	});

	if (fontsLoaded) {
		return (
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Landing'
					screenOptions={{
						headerTransparent: true,
						headerTitle: null,
					}}
				>
					<Stack.Screen name='Landing' component={CustomDrawer} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	} else return null;
}
