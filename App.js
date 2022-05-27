import 'react-native-gesture-handler';
import React from "react";
import {  StyleSheet} from "react-native";
import { Provider} from 'react-redux';
import { store } from './store';
import Com from "./Com";



const App = () => {

    return (
        <Provider store={store}>
            <Com/>
        </Provider>
    );
}

const styles = StyleSheet.create({
});

export default App
