import React ,{ useState } from 'react';
import { View,Text, StyleSheet, Dimensions,ScrollView,FlatList } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import MaterialbarChart from "react-native-vector-icons/AntDesign"
import MaterialLinerChart from "react-native-vector-icons/MaterialCommunityIcons"
import DropDownPicker from 'react-native-dropdown-picker';
import CalendarPicker from 'react-native-calendar-picker';



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

//map data
const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

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
     const [status,setStatus]= useState( )
     const [selectedStartDate,setDates]= useState(null)
     const [selectedEndDate,setEndDates]= useState(null)
     
     
     onDateChange= (date, type)=> {
      if (type === 'END_DATE') {
        this.setState({
          selectedEndDate: date,
        });
      } else {
        this.setState({
          selectedStartDate: date,
          selectedEndDate: null,
        });
      }
    }
    const minDate = new Date(); // Today
    const maxDate = new Date(2017, 6, 3);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

       return(
           <View>
               <Text style={styles.getcustomsText}>Consumption- ELONO62679</Text>
               <View style={styles.chartHeader}>
<MaterialbarChart name="barschart" style={styles.chartImg}/>
<MaterialLinerChart name="chart-areaspline" style={styles.chartImg}/>
<DropDownPicker
    items={[
      {label: 'Daily', value: 'daily'},
        {label: 'Monthly', value: 'monthly'},
        {label: 'Yearly', value: 'year'},
    ]}
    defaultValue={status}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.setState({
        status: item.value
    })}
/>
<CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        />
 
        <View>
          <Text>SELECTED START DATE:{ startDate }</Text>
          <Text>SELECTED END DATE:{ endDate }</Text>
        </View>
</View>
               
              <BarChart
  style={styles.graphStyle}
  data={data}
  width={screenWidth}
  height={220}
  yAxisLabel="$"
  chartConfig={chartConfig}
  verticalLabelRotation={30}
/>
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
      indicatorStyle={{ backgroundColor: 'white' }}
      indicatorContainerStyle={{ backgroundColor: 'pink' }}
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
getcustomsText:{
    fontSize:20,
    fontFamily:"Roboto"
},
chartHeader:{
    flexDirection:"row",
    paddingVertical:"5%",
    marginLeft:"10%",
},
chartImg:{
//paddingHorizontal:"7%",
   // width:"80%",
   

    height:"80%"
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
graphStyle:{

    backgroundColor:"black"
}
});