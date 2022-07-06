import React, { useState } from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";
import { Header } from 'react-native-elements';
import {PRESSED, PRESSEDLOGOUT} from "../constants/actiontype";
import {connect} from "react-redux";

const mapStateToProps = (state) => {

    return {
        friends: state.appLoad.friends,
    }};

const mapDispatchToProps = (dispatch) => ({
    onPress: () =>
        dispatch({type: PRESSEDLOGOUT}),

});


const Friends = (props) => {

    console.log(props.friends)


    return (
        <ScrollView>
            <View style={styles.white}>
           
           
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