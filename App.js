import React, { useState } from "react";
import { Button, View, Switch, StyleSheet, TextInput, Modal, Text, Pressable } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";


const App = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [theme, setTheme] = useState(styles.white);
    const [inputTheme, setInput] = useState(styles.inputW);
    const [checkBox, setCheckBox] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [text1, setText1] = useState('Firstname');
    const [text2, setText2] = useState('Lastname');

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        if (theme === styles.white) {
            setTheme(styles.black)
            setInput(styles.inputB)
        } else {
            setTheme(styles.white)
            setInput(styles.inputW)
        }
    }

    const setCheck = () => {
        setCheckBox(previousState => !previousState)
    }

    return (

         <View style={theme}>

             <Switch
                 style={styles.switch}
                 trackColor={{ false: "#767577", true: "#f4f3f4" }}
                 thumbColor={isEnabled ? "#767577" : "#f4f3f4"}
                 ios_backgroundColor="#3e3e3e"
                 onValueChange={toggleSwitch}
                 value={isEnabled}/>

             <View>

                <TextInput
                    style={inputTheme}
                    onChangeText={setText1}
                >{text1}</TextInput>

                <TextInput
                    style={inputTheme}
                    onChangeText={setText2}
                >{text2}</TextInput>

             </View>

             <View style={styles.button}>

                <BouncyCheckbox
                 size={15}
                 fillColor="red"
                 unfillColor="#FFFFFF"
                 text="I agree"
                 style={styles.checkbox}
                 onPress={setCheck}

                />

             <Button
                 disabled={checkBox}
                 title="Submit"
                 onPress={() => setModalVisible(true)}
             />

             </View>

             <View >

             <Modal
                 animationType="slide"
                 transparent={true}
                 visible={modalVisible}
                 onRequestClose={() => {
                     Alert.alert("Modal has been closed.");
                     setModalVisible(!modalVisible);
                 }}
             >
                 <View style={styles.centeredView}>
                     <View style={styles.modalView}>
                         <Text style={styles.modalText}>{`Hi, ${text1}  ${text2}`}</Text>
                         <Pressable
                             style={[styles.button, styles.buttonClose]}
                             onPress={() => setModalVisible(!modalVisible)}
                         >
                             <Text style={styles.textStyle} >Hide Modal</Text>
                         </Pressable>
                     </View>
                 </View>
             </Modal>
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

    black: {
        backgroundColor: '#000000',
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },

    inputW: {
        height: 40,
        width: 500,
        textAlign: "center",
        backgroundColor: '#000000',
        color: '#F0F8FF',
        margin: 1,
        borderWidth: 1,
        padding: 10
    },

    inputB: {
        height: 40,
        width: 500,
        textAlign: "center",
        backgroundColor: '#F0F8FF',
        color: '#000000',
        margin: 1,
        borderWidth: 1,
        padding: 10
    },

    switch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        top: 30,
        left: 180
    },

    button: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 1,
        padding: 10
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        }
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default App;
