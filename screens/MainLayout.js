import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList } from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';
import {HOME, Search, CartTab, Favourite,Nottifications} from "../screens/index"
import theme,{COLORS, FONTS, SIZES} from "../constant/theme"
import constants from "../constant/constants"
import images from "../constant/images"
import icons from '../constant/icons.js';
import dummyData from '../constant/dummyData.js';
import {Header} from '../components';
import {LinearGradient} from 'expo-linear-gradient';


const TabButton = ({label, icon, isFocused, onPress}) => {
    const animation = useSharedValue(0);
    const style = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(animation.value)
                }
            ]
        }
    })
    useEffect(() => {
        if (isFocused) {
            animation.value = 0;
            Animated.timing(animation, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }).start()
        }
    }, [isFocused])
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={[styles.tabButton, style]}>
                <Image source={icon} style={styles.icon} />
                <Text style={styles.label}>{label}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}


const MainLayout = ({drawerAnimationStyle, navigation, selectedTab, setSelectedTab}) => {
    useEffect(() => {
        setSelectedTab(constants.screens.home);
    }, [])
    return (
        <Animated.View
            style={{     
                flex: 1,
                backgroundColor: COLORS.white,
                ...drawerAnimationStyle,
            }}
        >
            {/* header  */}
            <Header 
            containerStyle={{
                height: 50,
                paddingHorizontal: SIZES.padding,
                marginTop: 40,
                alignItems: 'center',
                 }} 
            title={selectedTab.toUpperCase()}
            leftComponent={
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{width: 40, height: 40, alignItems:"center", justifyContent:"center", borderWidth: 1, borderColor: COLORS.gray2, borderRadius: SIZES.radius}}>
                    <Image source={icons.menu} />
                </TouchableOpacity>
            }

            rightComponent={
                <TouchableOpacity style={{borderRadius: SIZES.radius, alignItems:'center', justifyContent:"center"}}>
                    <Image source={dummyData.myProfile.profile_image} style={{width: 40, height:40, borderRadius: SIZES.radius}} />
                </TouchableOpacity>
            }
            />

            {/* content */}
                <View style={{flex: 1}}>

                </View>
            {/* bottomTabNavigator */}
            <View style={{height: 100, justifyContent:"flex-end"}}>
                {/* shadow */}
                <LinearGradient
                 start={{x: 0 , y: 0}}
                 end={{x: 0, y: 4}}
                 colors={[COLORS.transparent, COLORS.lightGray1]}
                style={{
                    position: 'absolute',
                    top: -20,
                    left: 0,
                    right: 0,
                    height: 100,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}
                   />

                {/* tabs */}
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.radius,
                    paddingBottom: 10,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.white,

                }}>
                    <TabButton
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab === constants.screens.home}
                        onPress={() => setSelectedTab(constants.screens.home)}

                    />

                    <TabButton
                        label={constants.screens.search}
                        icon={icons.search}
                        isFocused={selectedTab === constants.screens.search}
                        onPress={() => setSelectedTab(constants.screens.search)}

                    />

                    <TabButton
                        label={constants.screens.cart}
                        icon={icons.cart}
                        isFocused={selectedTab === constants.screens.cart}
                        onPress={() => setSelectedTab(constants.screens.cart)}

                    />

                    <TabButton
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                        isFocused={selectedTab === constants.screens.favourite}
                        onPress={() => setSelectedTab(constants.screens.favourite)}

                    />

                    <TabButton
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isFocused={selectedTab === constants.screens.notification}
                        onPress={() => setSelectedTab(constants.screens.notification)}

                    />

                
                 </View>
            </View>
            
        </Animated.View>
        
    )
}

function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => dispatch(setSelectedTab(selectedTab))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);