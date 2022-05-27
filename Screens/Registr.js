import React, { useState } from "react";
import { Button, View, Switch, StyleSheet, TextInput, Modal, Text, Pressable } from "react-native";
import {PRESSED} from "../constants/actiontype";
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
        dispatch({type: PRESSED}),

});



const Reg = (props) => {
    const [checkBox, setCheckBox] = useState(true);
    const [name, setName] = useState('Name');
    const [mail, setMail] = useState('Mail');
    const [password, setPassword] = useState('Password');

    const pressF = () => {
        props.onPress()
    }

    return (

        <View style={styles.white}>

            <View  style={styles.inputs}>
                <Text style={styles.textW}>REGISTRATION</Text>
                <TextInput style={styles.inputW} onChangeText={setName}>{name}</TextInput>
                <TextInput style={styles.inputW} onChangeText={setMail}>{mail}</TextInput>
                <TextInput style={styles.inputW} onChangeText={setPassword}>{password}</TextInput>
                <Button  title="Submit" onPress={pressF}/>
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
        margin: 1,
        padding: 10
    },

    inputs: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Reg);
