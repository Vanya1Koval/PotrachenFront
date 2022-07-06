import 'react-native-gesture-handler'
import { React,  useEffect, useState } from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";
import { Header } from 'react-native-elements';
import {FETCHEDBYID} from "../constants/actiontype";
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
    /* onPress: () =>
        dispatch({type: PRESSEDLOGOUT}), */
    onFetch: (payload) =>
        dispatch({type: FETCHEDBYID, payload}),

});

const Profile = (props) => {


    useEffect(() => {
        console.log(props.currentUser._id)
        fetch("http://192.168.1.78:3000/posts/getPosts/", {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id": props.currentUser._id})
          })
            .then(results => results.json())
            .then(data =>  props.onFetch(data))

    }, []);


    if(props.isLog && props.postsBool) { console.log(`token: ${props.token.token}`)
    return (
        <ScrollView>
        <View style={styles.white}>



        <Image
            source={{uri: `http://192.168.1.78:3000/static/userPic/${props.currentUser.img}`}}
            style={styles.profileImg}
            key={Math.random()}
            />  

        {/* <Button onPress={editPhoto}  style={styles.button}  title="Edit photo"  /> */}

        <Text key={Math.random()}>{props.currentUser.name}</Text>

        <View><Text>YOUR POSTS:</Text></View>

          {props.currentUsersPosts.map((obj) =>

        <View style={styles.white} key={Math.random()} >

    
             <Image
                source={{uri: `http://192.168.1.78:3000/static/postPic/${obj.img}`}}
                style={{width: 90
                , height: 90}}
                key={Math.random()}
            /> 


    <Text key={Math.random()}>{obj.text}</Text>
</View>)}  
            
        </View>
        </ScrollView>
    );} else {return(<View></View>)}
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

    profileImg: {
        height: 200,
        width: 200,
        borderRadius: 50,
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
