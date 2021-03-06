import React, { useState } from "react";
import {View, Text, Button, StyleSheet, TextInput, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
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


const Add = (props) => {

    const [text, setText] = useState('Text');
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

    const createPost = () => {

        const formData = new FormData();
        formData.append('filedata', filedata);
        formData.append('text', text);
        formData.append('creatorId', props.currentUser._id);
        console.log(JSON.stringify({"filedata": filedata, "text": text, "creatorId": props.currentUser._id}))
        fetch('http://192.168.1.78:3000/posts/', {
            method: 'POST',
            body: formData
          })
          .then(setText(''))

    }


    return (

        <View style={styles.white}>
            <View  style={styles.inputs}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Add);