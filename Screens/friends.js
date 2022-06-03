import React, { useState } from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";
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


const Friends = (props) => {




    return (
        <ScrollView>
        <View style={styles.white}>
           
           <View flexDirection='row'>
           <Image source={require('../assets/screen.png')} style={{width: 30, height: 30}} />
            <Text >Name</Text>
            <Text >Age</Text>
            <Text >??????</Text>
            </View>
            <View flexDirection='row'>
           <Image source={require('../assets/screen.png')} style={{width: 30, height: 30}} />
            <Text >Name</Text>
            <Text >Age</Text>
            <Text >??????</Text>
            </View>
            <View flexDirection='row'>
           <Image source={require('../assets/screen.png')} style={{width: 30, height: 30}} />
            <Text >Name </Text>
            <Text >Age</Text>
            <Text >??????</Text>
            </View>
            <View flexDirection='row'>
           <Image source={require('../assets/screen.png')} style={{width: 30, height: 30}} />
            <Text >Name</Text>
            <Text >Age</Text>
            <Text >??????</Text>
            </View>
            <View flexDirection='row'>
           <Image source={require('../assets/screen.png')} style={{width: 30, height: 30}} />
            <Text >Name</Text>
            <Text >Age</Text>
            <Text >??????</Text>
            </View>
        </View>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Friends);