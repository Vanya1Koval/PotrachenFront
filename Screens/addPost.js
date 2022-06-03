import React, { useState } from "react";
import {View, Text, Button, StyleSheet, TextInput } from "react-native";
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


const Add = (props) => {

    const [url, setUrl] = useState('Image url');
    const [name, setName] = useState('Name');
    const [age, setAge] = useState('Age');

    const LogOut = () => {
        props.onPress()
    }


    return (

        <View style={styles.white}>
            <View  style={styles.inputs}>
                <TextInput style={styles.inputW} onChangeText={setUrl}>{url}</TextInput>
                <TextInput style={styles.inputW} onChangeText={setName}>{name}</TextInput>
                <TextInput style={styles.inputW} onChangeText={setAge}>{age}</TextInput>
                <Button  style={styles.button}  title="Submit"  />
            </View>
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

    inputs: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);