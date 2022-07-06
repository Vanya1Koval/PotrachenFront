import React, { useEffect } from "react";
import {View, Text, Button, StyleSheet, Image } from "react-native";
import { Header } from 'react-native-elements';
import {FETCHED} from "../constants/actiontype";
import {connect} from "react-redux";

const mapStateToProps = (state) => {

    return {
        main: state.users.main,
        renderBool: state.users.renderBool,

    }};

const mapDispatchToProps = (dispatch) => ({

    onFetch: (payload) =>
        dispatch({type: FETCHED, payload})

});


const Search = (props) => {

    useEffect(() => {
        fetch(`http://192.168.1.78:3000/users/`)
            .then(results => results.json())
            .then(data =>  props.onFetch(data))

    }, []);

    const addFriend = (event) => {

        console.log(event._targetInst/* .return.key */ )

       // fetch('http://192.168.1.78:3000/friends/', {
        //    method: 'POST',
        //    headers: {
         //     'Accept': 'application/json, text/plain, */*',
        //      'Content-Type': 'application/json'
         //   },
         //   body: JSON.stringify({"login": login, "password": password})
         // })
          //.then(res => res.json())
         // .then(res =>  props.onPress(res))

    }

if(props.renderBool) { console.log(props.main)
    return (

        <View style={styles.white}>
            
             {props.main.map((obj) =>

            <View style={styles.people}  key={Math.random()} >

            <Image
                source ={{ uri:(`http://192.168.1.78:3000/static/userPic/${obj.img}`)}}
                style={{width: 30
                    , height: 30}}
                key={Math.random()}
                />

            <Text key={Math.random()}>{obj.name}</Text>

            <Button onPress={event => addFriend(event)} key={obj._id}  style={styles.button}  title="Connect"  />


            </View>)} 
        </View>
    );} else {return (<View></View>)}
}

const styles = StyleSheet.create({

    white: {
        backgroundColor: '#F0F8FF',
        flex: 1,


    },

    people: {
        flexDirection: "row"
    },

    button: {
        position: 'absolute',
        top: 1,
        right: 1

    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);