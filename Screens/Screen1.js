import React, { useState } from "react";
import {View, Text, Button, StyleSheet } from "react-native";
import { Header } from 'react-native-elements';
import {PRESSED, PRESSEDLOGOUT} from "../constants/actiontype";
import {connect} from "react-redux";

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


const Screen1 = (props) => {

    const LogOut = () => {
        props.onPress()
    }


    return (

        <View style={styles.white}>
            <Header
                backgroundColor="#F0F8FF"
                rightComponent={ <Button onPress={LogOut} style={styles.button}  title="Log out" />}
            />
            <Text>News/Posts list</Text>

        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);