import 'react-native-gesture-handler';
import React from 'react'
import theme,{COLORS, FONTS, SIZES} from "../constant/theme"
import constants from "../constant/constants"
import images from "../constant/images"
import icons from '../constant/icons.js';
import dummyData from '../constant/dummyData.js';
import { View, Text,Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import Animated from 'react-native-reanimated';
import { MainLayout } from '../screens'


const Drawer = createDrawerNavigator()
const CustomDrawerItem = ({label, icon}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection:"row", 
                height: 40, marginBottom: SIZES.base, 
                alignItems: "center",
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                //backgroundColor: 
            }}
           // onPress={}
        >
            <Image source={icon} style={{width: 20, height: 20, tintColor:COLORS.white}} />
            <Text style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight:"600", 
                fontSize: 16,
                 lineHeight: 22
            }}> 
            {label}
             </Text>

        </TouchableOpacity> 
    )
}
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
                <TouchableOpacity
                    style={{
                        flexDirection:"row",
                        marginTop: SIZES.radius,
                        alignItems: "center",
                    }}
                    onPress={()  => console.log("profile")}
                >
                    <Image source={dummyData.myProfile?.profile_image} style={{width: 50, height: 50, borderRadius: SIZES.radius}} />
                    <View
                    style={{
                        marginLeft: SIZES.radius,
                    }}
                    >
                        <Text style={{color: "white", fontWeight:"600", fontSize: 16, lineHeight: 22}}>{dummyData.myProfile?.name}</Text>
                        <Text style={{color: "white", fontSize:14}}>View Your Profile</Text>
                    </View>
                </TouchableOpacity>
                {/* drawer items */}
                <View style={{flex: 1, marginTop:SIZES.padding}}> 
                    <CustomDrawerItem 
                    label={constants.screens.home} 
                    icon={icons.home}
                     />

                    <CustomDrawerItem 
                    label={constants.screens.my_wallet} 
                    icon={icons.wallet}
                     />

                    <CustomDrawerItem 
                    label={constants.screens.notification} 
                    icon={icons.notification}
                     />

                    <CustomDrawerItem 
                    label={constants.screens.favourite} 
                    icon={icons.favourite}
                     />
                     {/* line divider */}
                     <View
                     style={{
                            height: 1,
                            marginVertical: SIZES.radius,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1
                     }}
                     />
                        {/* drawer items */}
                        <CustomDrawerItem 
                            label="Track Your Order"
                            icon={icons.location}
                        />

                        <CustomDrawerItem 
                            label="Coupons"
                            icon={icons.coupon}
                        />

                        <CustomDrawerItem 
                            label="Settings"
                            icon={icons.setting}
                        />


                        <CustomDrawerItem 
                            label="Invite a Friend"
                            icon={icons.profile}
                        />
                        
                        <CustomDrawerItem 
                            label="Coupons"
                            icon={icons.coupon}
                        />

                </View>

                <View style={{
                    marginBottom: SIZES.padding,

                }}> 
                    <CustomDrawerItem 
                            label="Logout"
                            icon={icons.logout}
                        />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const CustomDrawer = () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0))
    // for scaling down the screen to display part of the main and add borderadius
   const scale = Animated.interpolateNode(progress, {
       inputRange:[0, 1],
       outputRange:[1, 0.8]
   })

   const borderRadius = Animated.interpolateNode(progress, {
    inputRange:[0, 1],
    outputRange:[0, 26]
    })

    const animatedStyle= {borderRadius, transform: [{scale}]}
    return (
        <View style={{flex:1, backgroundColor: COLORS.primary}}>
            <Drawer.Navigator
            drawerContent= {props => {
                setTimeout(() => {
                    setProgress(props.progress)
                }, 0)
                
                return (
                    <CustomDrawerContent navigation={props.navigation} />
                )
            
            }}
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
                    {props => <MainLayout {...props} animatedStyle={animatedStyle} />}
                    </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer
