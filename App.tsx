import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, ScrollView} from 'react-native';

function newApp() {
    const [count, setCount] = useState(0);
    return (
        <ScrollView style={styler.mainContainer}>
            <Text style={{textAlign:'center', textAlignVertical:'center'}}>
                Starts Here!
            </Text>
            <View style={styler.firstContainer}>
                <Text>
                    You clicked {count} times!
                </Text>
                <Button onPress={() => setCount(count+1)} title={'Click It!'} />
            </View>
            <View style={styler.secContainer}>
                <Text>
                    Part 2 is here!
                </Text>
                <TextInput style={styler.textInput} placeholder="Type Into Me!" />
            </View>
        </ScrollView>
    );
}
export default newApp;

const styler = StyleSheet.create({
    mainContainer: {

    },
    firstContainer: {
        backgroundColor:'#fff',
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    secContainer: {
        backgroundColor:'#fff',
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    textInput: {
        color:'black',
        fontWeight:'bold',
        backgroundColor:'#555',
        height:25,
        borderColor: 'black',
        // borderWidth: 0.1,
        // borderRadius: 2.5,
        padding:10,
        textAlign:'center',
        shadowOpacity:0.5,
        shadowOffset:{width:-2, height:-2},
    }
})