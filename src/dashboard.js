import * as React from 'react';
import { View,Text, StyleSheet, Dimensions,ScrollView,FlatList } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
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
const FirstRoute = () => {  
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
};
 
const SecondRoute = () => {
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
  
          };

   const ThirdRoute =()=>{
       return(
           <View>
               <Text>Coming soon</Text>
           </View>
       )
   }       
const initialLayout = { width: Dimensions.get('window').width };
 
export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '7 days' },
    { key: 'second', title: '30 Days' },
    { key: 'third', title: 'Custom Date' },
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute
  });
 
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      
    />
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 0.5,
  },
  container: {  
    flex: 1,  
    fontSize:22
    //flexWrap:"wrap",
    // flexDirection:"row"
},  
headerText:{

flexDirection:"row",
fontSize:18,
justifyContent:"space-between",
paddingHorizontal:"4%"
},
text:{
    fontSize:20,
    fontFamily:"Roboto",
    paddingHorizontal:4
},
elecText:{
fontSize:19,
fontFamily:"Roboto"
},
dateText:{
    fontFamily:"Roboto"
},
priceText:{
    fontSize:18,
    fontFamily:"Roboto"
},
item: {  
    flexDirection:"row",
    fontSize:20,
    justifyContent:"space-between",
    paddingHorizontal:"5%",
    padding:"2%"
},
});