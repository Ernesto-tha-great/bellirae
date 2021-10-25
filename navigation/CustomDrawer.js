import 'react-native-gesture-handler';
import React from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { MainLayout } from '../screens'
import {COLORS, FONTS, SIZES, constants, theme, images, icons, dummyData} from '../constants'


const Drawer = createDrawerNavigator()
const CustomDrawerContent = ({navigation}) => {
    return (
        <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={{
            flex: 1,
        }}>
            <View style={{flex: 1, paddingHorizontal: SIZES.radius}}>
                {/* close button */}
                    <View style={{alignItems: "flex-start", justifyContent:"center"}} onPress={() => navigation.closeDrawer()}>
                        <TouchableOpacity style={{alignItems:"center", justifyContent:"center"}} >
                            <Image source={icons.cross} style={{width: 35, height: 35, tintColor:COLORS.white}} />
                            </TouchableOpacity>

                    </View>

                {/* profile */}

                {/* drawer items */}
            </View>
        </DrawerContentScrollView>
    )
}

const CustomDrawer = () => {
    return (
        <View style={{flex:1, backgroundColor: COLORS.primary}}>
            <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props.navigation} />}
            screenOptions={{
               headerShown: false,
                overlayColor: 'transparent',
                drawerStyle: {
                    flex: 1,
                    backgroundColor: "transparent",
                    width:"69%",
                    paddingRight: 20,
                },
                sceneContainerStyle: {
                    backgroundColor: "transparent",
                },
                
            }}
             initialRouteName="MainLayout"
             >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} />}
                    </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer
