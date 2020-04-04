// import React from 'react';
// import { StyleSheet, Button, Text, View} from 'react-native';


// function newApp() {
//   return(
//     alert('Meow!')
//   );
// }
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <Button onPress={newApp} title={'Click Me!'}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// ---------------------------------------------------------------------------------------
import React, {Component, useState} from 'react';
import {Text, TextInput, StyleSheet, Button, View} from 'react-native';

export default function myApp() {
  let [inputText, setInputText] = useState('');
  let [inputName, setName] = useState(false);

  // let StarWars = async () => {
  if (inputText !== '' && inputName==true) {
    let clearCurrent = async () => {
      setInputText('');
      setName(false);
      return;
      }
    if (inputText=='General Kenobi') {
    
    // alert('Ah... General Kenobi!');
      return(
        <View style={{flex:1, justifyContent:'space-evenly', alignItems:'center'}}>
          <Text>Ah... General Kenobi!</Text>
          <Text>Please, Come In!</Text>
          <Button onPress={clearCurrent} style={{backgroundColor:'blue'}} title={'Next!'} />
        </View>
      );
    } else {
        return(
          <View style={{flex:1, justifyContent:'space-evenly', alignItems:'center'}}>
            <Text>Get Out!</Text>
            <Button onPress={clearCurrent} style={{color:'blue', padding:20, borderRadius:5}} title={'Next!'} />
          </View>
        );

    }
    //   <View style={{flex:1, justifyContent:'space-evenly', alignItems:'center'}}>
    //     <Text style={{fontSize:25}}>
    //       {inputText=='General Kenobi'? 'Ah... General Kenobi!':''}
    //     </Text>
    //   </View>
    // )
  }
  // };
  // let [inpuName, setName] = useState(false)
  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'space-evenly', backgroundColor:'#000'}}>
      
      <Text style={{marginTop:60,fontSize:25, backgroundColor:'grey',padding:10}}>
          Hello There!
        </Text>
      <Text style={{marginTop:20,fontSize:25, backgroundColor:'#090',padding:10}}>Who are you?</Text>
      <TextInput
        style={{marginTop:20,padding:10, fontSize:25, backgroundColor:'#fff',borderColor:'black', borderWidth:1}}
        placeholder="Type Into The Box"
        onChangeText={inputText => setInputText(inputText)}
        defaultValue = {inputText}
        />
        
        <Button onPress={() => {
          setName(true);
        }} title={'Submit'}/>
    </View>
  );
  
}