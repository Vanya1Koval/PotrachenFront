import React, { useState } from "react";
import {View, Text, Button, StyleSheet } from "react-native";
import {PRESSED, PRESSEDLOGOUT} from "../constants/actiontype";
import {connect} from "react-redux";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from "./Profile";
import profileEdit from "./profileEdit";
import searchPeople from "./searchPeople";
import Add from "./addPost";

const Drawer = createDrawerNavigator();

const mapStateToProps = (state) => {

    return {
        main: state.appLoad.data,
        bool: state.appLoad.bool,
        cart: state.appLoad.cart,
        switch: state.appLoad.switch
    }};

const mapDispatchToProps = (dispatch) => ({
    onPress: () =>
        dispatch({type: PRESSEDLOGOUT}),

});


const DrawScreen = (props) => {

    const LogOut = () => {
        props.onPress()
    }


    return (

        
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Profile} 
           options={{
            headerRight: () => (
                <Button onPress={LogOut} style={styles.button} right={2} title="Log out" />
            ),
          }}
          
          />
          <Drawer.Screen name="Add Post" component={Add}/>
          <Drawer.Screen name="Edit Profile" component={profileEdit}/>
          <Drawer.Screen name="Search" component={searchPeople} />
        </Drawer.Navigator>
      

    );
}
const styles = StyleSheet.create({

    white: {
        backgroundColor: '#F0F8FF',
        flex: 1,
        alignItems: "center",
    },

    button: {
        position: 'absolute',
        top: 1,
        right: 1

    },
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawScreen);
