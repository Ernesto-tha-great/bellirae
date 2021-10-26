import 'react-native-gesture-handler';
import React, {createRef} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './navigation/CustomDrawer'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer ref={createRef()}>
            <Stack.Navigator
            
                screenOptions={{
                    headerShown: false,
                    
                }}
                
            >
                <Stack.Screen
                    name="Home"
                    component={CustomDrawer}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App