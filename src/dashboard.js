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
]
    return(
      <View  style={styles.container}>
         <View>
         <SafeAreaView >
      <Text >Electricity</Text>
      <FlatList
        data={elecData}
       
        renderItem={({ item }) => (
        <View  style={styles.item}>
            <Text>{item.electricityNumber}</Text>
            <Text>{item.date}</Text>
        </View>
        )}
        keyExtractor={item => item.id}
        extraData={"selected"}
      />
    </SafeAreaView>
         </View>
         <View >
         <SafeAreaView >
      <Text >View Consumptions</Text>
      <FlatList
        data={elecData}
       
        renderItem={({ item }) => (
        <View  style={styles.item}>
            <Text>{item.electricityNumber}</Text>
            <Text>{item.date}</Text>
        </View>
        )}
        keyExtractor={item => item.id}
        extraData={"selected"}
      />
    </SafeAreaView>
         </View>
        </View>
    )

  }

  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        flexWrap:"wrap",
        flexDirection:"row"
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },  
})  
  export default Dashboard;

  