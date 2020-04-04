import React from 'react';
import { StyleSheet, Button, Text, View, TextInput} from 'react-native';

function Mursi(props: { dudu: React.ReactNode; }) {
  return(
    <View style={styler.secondaryContainer}>
      <Text style={styler.secText}>
        Well Hello There {props.dudu}!
      </Text>
    </View>
  )
}
export default function suraj() {
  return(
    <View style={styler.mainContainer}>
      <Text>This is a sample web app.</Text>
      <Mursi dudu='LuluLala' />
    </View>
  );
}

const styler = StyleSheet.create({
  mainContainer: {
    flex:2,
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'grey'
  },
  secondaryContainer:
  {
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'black',
  },
  secText: {
    color:'#fff'
  }
})