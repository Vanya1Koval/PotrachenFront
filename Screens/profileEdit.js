import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import {View, Text, Button, StyleSheet, TextInput, Image } from "react-native";
import { Header } from 'react-native-elements';
import {PRESSED, PRESSEDLOGOUT} from "../constants/actiontype";
import {connect} from "react-redux";

const mapStateToProps = (state) => {

    return {
       
            currentUser: state.appLoad.currentUser,
            token: state.appLoad.token,
            currentUsersPosts: state.fetchPostsByID.currentUsersPosts,
            isLog: state.appLoad.isLog,
            postsBool: state.fetchPostsByID.profileBool
       
    }};

const mapDispatchToProps = (dispatch) => ({
    onPress: () =>
        dispatch({type: PRESSEDLOGOUT}),

});


const profEdit = (props) => {


    const [name, setName] = useState(props.currentUser.name);
    const [image, setImage] = useState(null);
    const [filedata, setFiledata] = useState(null);



    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
          setFiledata({
            uri: result.uri,
            name: 'SomeImageName.jpg',
            type: 'image/jpg',
          });
          console.log(image)
        }
      };

      const updateUser = () => {

        const formData = new FormData();
        formData.append('token', props.token.token);
        formData.append('filedata', filedata);
        formData.append('name', name);
        formData.append('_id', props.currentUser._id);
        console.log(formData)
        fetch('http://192.168.1.78:3000/users/', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${props.token.token}`,
              },
            body: formData
          })


    }

    return (

        <View style={styles.white}>
            <View  style={styles.inputs}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <TextInput style={styles.inputW} onChangeText={setName}>{name}</TextInput>
                <Button  onPress={updateUser} style={styles.button}  title="Submit"  />
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

export default connect(mapStateToProps, mapDispatchToProps)(profEdit);