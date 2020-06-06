import React from 'react';
import {
 
  View,
  Image
  
} from 'react-native';
import logo from "./Images/undraw_under_construction_46pa.png"

  function TopUp () {
    return(
      <View>
        {/* <Image 
        //source={require(logo)}
        style={{width:"50%",height:"50%"}}
         source={{
            uri: "./Images/undraw_under_construction_46pa.png",
          }}
        /> */}

<Image source = {{uri: "./Images/undraw_under_construction_46pa.png"}}
   style = {{ width: 200, height: 200 }}
   />
        </View>
    )
  }
  export default TopUp
  