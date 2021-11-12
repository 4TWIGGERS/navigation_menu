import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import TwiggersLogo from '../components/icon';

const CustomDrawerContent = (props) => {
	return (
		<DrawerContentScrollView style={styles.Container} {...props}>
			<View style={styles.LogoContainer}>
				<TwiggersLogo />

				<View
					style={{
						marginTop: 20,
					}}
				>
					<Text style={styles.LogoText1}>4Twiggers</Text>
					<Text style={styles.LogoText2}>hello@4twiggers.com</Text>
				</View>
			</View>

			<View
				style={{
					marginTop: 20,
				}}
			>
				<DrawerItem
					inactiveTintColor='#fff'
					label='Home'
					style={{
						marginLeft: -8,
					}}
					labelStyle={{
						marginLeft: -16,
					}}
					onPress={() => props.navigation.navigate('Landing')}
					icon={() => <AntDesign name='home' size={25} color='#fff' />}
				/>
				<DrawerItem
					inactiveTintColor='#fff'
					label='Our Services'
					style={{
						marginLeft: -8,
					}}
					labelStyle={{
						marginLeft: -16,
					}}
					onPress={() => props.navigation.navigate('Service')}
					icon={() => (
						<MaterialIcons name='design-services' size={25} color='#fff' />
					)}
				/>
				<DrawerItem
					inactiveTintColor='#fff'
					label='About Us'
					style={{
						marginLeft: -8,
					}}
					labelStyle={{
						marginLeft: -16,
					}}
					onPress={() => props.navigation.navigate('Service')}
					icon={() => (
						<FontAwesome5 name='address-card' size={24} color='#fff' />
					)}
				/>
				<DrawerItem
					inactiveTintColor='#fff'
					label='Team'
					style={{
						marginLeft: -8,
					}}
					labelStyle={{
						marginLeft: -16,
					}}
					icon={() => <AntDesign name='team' size={24} color='#fff' />}
				/>
				<DrawerItem
					inactiveTintColor='#fff'
					label='Contact Us'
					style={{
						marginLeft: -8,
					}}
					labelStyle={{
						marginLeft: -16,
					}}
					icon={() => (
						<MaterialIcons name='contact-page' size={24} color='#fff' />
					)}
				/>
			</View>
		</DrawerContentScrollView>
	);
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
	Container: {
		marginLeft: 25,
		flex: 1,
	},
	LogoContainer: {
		marginTop: 40,
		color: '#fff',
	},
	LogoText1: {
		fontFamily: 'OpenSans_800ExtraBold',
		color: '#fff',
		fontSize: 25,
	},
	itemColor: {
		fontFamily: 'OpenSans_800ExtraBold',
		color: '#fff',
	},
	LogoText2: {
		fontSize: 15,
		color: '#fff',
		fontFamily: 'OpenSans_400Regular',
	},
});
