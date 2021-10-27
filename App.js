import 'react-native-gesture-handler';
import React, {createRef} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer';
import CustomDrawer from './navigation/CustomDrawer'

const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export default App