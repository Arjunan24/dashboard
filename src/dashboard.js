import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  
} from 'react-native';


function Dashboard () {

    const elecData=[
        {
        electricityNumber:"ElONO62679",
        date:"2020/01/07",
        price:"-R25.3"
       },
       {
        electricityNumber:"ElONO62679",
        date:"2020/02/07",
        price:"-R25.3"
       },
       {
        electricityNumber:"ElONO62690",
        date:"2020/03/07",
        price:"-R26.3"
       },
       {
        electricityNumber:"ElONO62688",
        date:"2020/04/07",
        price:"-R22.3"
       },
       {
        electricityNumber:"ElONO626329",
        date:"2020/05/07",
        price:"-R25.9"
       },
       {
        electricityNumber:"ElONO62679",
        date:"2020/06/07",
        price:"-R22.3"
       },
       {
        electricityNumber:"ElONO62679",
        date:"2020/01/07",
        price:"-R25.3"
       },
       {
        electricityNumber:"ElONO62679",
        date:"2020/01/07",
        price:"-R25.3"
       },
]
    return(
      <View  style={styles.container}>
<View style={styles.headerText}>
<Text style={styles.text}>Electricity</Text>
<Text  style={styles.text}>View Consumption</Text>
</View>
<ScrollView>
<FlatList
        data={elecData}
        renderItem={({ item }) => (
        <View  style={styles.item}>
            <View>
            <Text style={styles.elecText}>{item.electricityNumber}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <View>
                <Text style={styles.priceText}>{item.price}</Text>
            </View>
        </View>
        )}
        keyExtractor={item => item.id}
        extraData={"selected"}
      />
    </ScrollView>
         
<View style={styles.headerText}>
    <Text style={styles.elecText}>Total Count</Text>
        <Text style={styles.priceText}>{"480"}</Text>

</View>

        </View>
    )

  }

  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        fontSize:22
        //flexWrap:"wrap",
        // flexDirection:"row"
    },  
    headerText:{

flexDirection:"row",
fontSize:20,
justifyContent:"space-between",
paddingHorizontal:"4%"
    },
    text:{
        fontSize:22,
        fontFamily:"Roboto",
        paddingHorizontal:4
    },
    elecText:{
fontSize:22,
fontFamily:"Roboto"
    },
    dateText:{
        fontFamily:"Roboto"
    },
    priceText:{
        fontSize:19,
        fontFamily:"Roboto"
    },
    item: {  
        flexDirection:"row",
        fontSize:22,
        justifyContent:"space-between",
        paddingHorizontal:"5%",
        padding:"2%"
    },  
})  
  export default Dashboard;

  