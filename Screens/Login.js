import React, { useState } from "react";
import { Button, View, Switch, StyleSheet, TextInput, Modal, Text, Pressable } from "react-native";
import { connect, useDispatch } from 'react-redux';
import { FETCHED, PRESSED } from "../constants/actiontype";

const mapStateToProps = (state) => {

    return {
        main: state.appLoad.data,
        bool: state.appLoad.bool,
        cart: state.appLoad.cart,
        switch: state.appLoad.switch
    }};

const mapDispatchToProps = (dispatch) => ({
    onPress: () =>
        dispatch({type: PRESSED}),

});

const Login = (props) => {

    const [name, setName] = useState('Name');
    const [password, setPassword] = useState('Password');

    const pressF = () => {
        props.onPress()
    }


    return (

        <View style={styles.white}>

            <View  style={styles.inputs}>
                <Text style={styles.textW}>LOG IN</Text>
                <TextInput style={styles.inputW} onChangeText={setName}>{name}</TextInput>
                <TextInput style={styles.inputW} onChangeText={setPassword}>{password}</TextInput>
                <Button onPress={pressF} style={styles.button}  title="Submit"  />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    white: {
        backgroundColor: '#F0F8FF',
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },

    inputW: {
        height: 40,
        width: 350,
        textAlign: "center",
        color: '#000000',
        margin: 1,
        borderBottomColor: '#000000',
        borderWidth: 1,
        padding: 10
    },

    textW: {
        color: '#F0F8FF'
    },

    button: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    inputs: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

