import React, { useState } from "react";
import {View, Text, Button, StyleSheet, TextInput } from "react-native";
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


const EditPhoto = (props) => {

    const [url, setUrl] = useState('Image url');
    const [text, setText] = useState('Text');


    const createPost = () => {

        fetch('http://192.168.1.78:3000/users/createpost/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "img": url, "text": text, "creatorId": props.currentUser._id })
          })
          .then(setUrl(''))
          .then(setText(''))

    }


    return (

        <View style={styles.white}>
            <View  style={styles.inputs}>
                <TextInput style={styles.inputW} onChangeText={setUrl}>{url}</TextInput>
                <TextInput style={styles.inputW} onChangeText={setText}>{text}</TextInput>
                <Button onPress={createPost}  style={styles.button}  title="Submit"  />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPhoto);