import 'react-native-gesture-handler'
import React, { useState } from "react";
import {View, Text, Button, StyleSheet, Image } from "react-native";
import { Header } from 'react-native-elements';
import {PRESSED, PRESSEDLOGOUT} from "../constants/actiontype";
import {connect} from "react-redux";




const mapStateToProps = (state) => {

    return {
        currentUser: state.appLoad.currentUser,

    }};

const mapDispatchToProps = (dispatch) => ({
    onPress: () =>
        dispatch({type: PRESSEDLOGOUT}),

});

const Profile = (props) => {

    return (

        <View style={styles.white}>



        <Image
            source ={{ uri:(props.currentUser.img)}}
            style={{width: 150
            , height: 150}}
            key={Math.random()}
            />

        <Text key={Math.random()}>{props.currentUser.name}</Text>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
