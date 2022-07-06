import {React,  useEffect } from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";
import { Header } from 'react-native-elements';
import {ALLPOSTS} from "../constants/actiontype";
import {connect} from "react-redux";

const mapStateToProps = (state) => {

    return {
        feeds: state.fetchPosts.feeds,
        renderBool: state.fetchPosts.renderBool

    }};

const mapDispatchToProps = (dispatch) => ({
    onFetch: (payload) =>
        dispatch({type: ALLPOSTS, payload}),

});


const Feed = (props) => {

    
    useEffect(() => {

        fetch(`http://192.168.1.78:3000/posts/`)
            .then(results => results.json())
            .then(data =>  props.onFetch(data))

    }, []);


    if (props.renderBool) {
    return (
        <ScrollView>
         <View style={styles.white}>
            {props.feeds.map((obj) =>

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
    ); } else {return (<View></View>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);