import React from "react";
import {  StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Log from "./Screens/Login";
import Reg from "./Screens/Registr";
import {connect, Provider} from 'react-redux';
import { store } from './store';
import {PRESSED} from "./constants/actiontype";
import Feed from "./Screens/Feed";
import DrawScreen from "./Screens/DrawScreen";
import Friends from "./Screens/friends";



const Tab = createBottomTabNavigator();


const mapStateToProps = state => {
    return {
        isLog: state.appLoad.isLog,
    }};

const mapDispatchToProps = dispatch => ({
    onPress: (payload) =>
        dispatch({type: PRESSED, payload}),

});


function MyTabsLog (props) {
    return (
        <Tab.Navigator>
            <  Tab.Screen name="Log In" component={Log} />
            <Tab.Screen name="Registration" component={Reg} />
        </Tab.Navigator>
    );
}

function MyTabsHome (props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={DrawScreen}/>
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="Friends" component={Friends}/>
        </Tab.Navigator>
    );
}



const Com = (props) => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                { props.isLog ?  (<MyTabsHome />): (<MyTabsLog/>)}
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
});

export default connect(mapStateToProps, mapDispatchToProps)(Com);