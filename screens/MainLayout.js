import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Animated from 'react-native-reanimated';

const MainLayout = ({animatedStyle}) => {
    return (
        <View
            style={{
                ...animatedStyle,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:"white",
                
                
            }}
        >
            <Text>MainLayout</Text>
        </View>
    )
}

export default MainLayout;