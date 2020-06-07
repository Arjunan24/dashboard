import React from 'react';
import {
 
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

  function TopUp () {
    return(
      <View style={styles.container}>
    
<Image
          source={require("../assets/undraw_under_construction_46pa.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Under Construction...</Text>
        </View>
    )
  }
  const styles = StyleSheet.create({
      container:{
flex:1,
justifyContent:"center",
alignItems:"center"
      },
      text:{
          fontFamily:"Roboto",
          fontSize:18
      },
    image: {
        //flex:1,
        width: '95%',
        height: '80%',
       // padding:"5%",
       // paddingHorizontal:
      },
  });
  export default TopUp
  