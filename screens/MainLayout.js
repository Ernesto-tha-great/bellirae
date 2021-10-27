import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList } from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';
import {HOME, Search, CartTab, Favourite,Nottifications} from "../screens"
import theme,{COLORS, FONTS, SIZES} from "../constant/theme"
import constants from "../constant/constants"
import images from "../constant/images"
import icons from '../constant/icons.js';
import dummyData from '../constant/dummyData.js';


const MainLayout = ({drawerAnimationStyle}) => {
    return (
        <Animated.View
            style={{     
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:"white",
                ...drawerAnimationStyle,
            }}
        >
            {/* header  */}

            {/* content */}

            {/* bottomTabNavigator */}
            
        </Animated.View>
        
    )
}

export default MainLayout;