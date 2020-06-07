import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import MaterialbarChart from 'react-native-vector-icons/AntDesign';
import MaterialLinerChart from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';

const elecData = [
  {
    electricityNumber: 'ElONO62679',
    date: '2020/01/07',
    price: 'Rs.25.3',
  },
  {
    electricityNumber: 'ElONO62679',
    date: '2020/02/07',
    price: 'Rs.25.3',
  },
  {
    electricityNumber: 'ElONO62690',
    date: '2020/03/07',
    price: 'Rs.26.3',
  },
  {
    electricityNumber: 'ElONO62688',
    date: '2020/04/07',
    price: 'Rs.22.3',
  },
  {
    electricityNumber: 'ElONO626329',
    date: '2020/05/07',
    price: 'Rs.25.9',
  },
  {
    electricityNumber: 'ElONO62679',
    date: '2020/06/07',
    price: 'Rs.22.3',
  },
  {
    electricityNumber: 'ElONO62679',
    date: '2020/01/07',
    price: 'Rs.25.3',
  },
  {
    electricityNumber: 'ElONO62679',
    date: '2020/01/07',
    price: 'Rs.25.3',
  },
];

//map data
const screenWidth = Dimensions.get('window').width;
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const FirstRoute = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.text}>Electricity</Text>
        <Text style={styles.text}>View Consumption</Text>
      </View>
      <ScrollView>
        <FlatList
          data={elecData}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View>
                <Text style={styles.elecText}>{item.electricityNumber}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              <View>
                <Text style={styles.priceText}>{item.price}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          extraData={'selected'}
        />
      </ScrollView>

      <View style={styles.headerText}>
        <Text style={styles.total}>Total Count</Text>
        <Text style={styles.total}>Rs.480</Text>
      </View>
    </View>
  );
};

const SecondRoute = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.text}>Electricity</Text>
        <Text style={styles.text}>View Consumption</Text>
      </View>
      <ScrollView>
        <FlatList
          data={elecData}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View>
                <Text style={styles.elecText}>{item.electricityNumber}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              <View>
                <Text style={styles.priceText}>{item.price}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          extraData={'selected'}
        />
      </ScrollView>

      <View style={styles.headerText}>
        <Text style={styles.total}>Total Count</Text>
        <Text style={styles.total}>Rs.480</Text>
      </View>
    </View>
  );
};

const ThirdRoute = () => {
  const [status, setStatus] = useState('');
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState('2016-05-15');

  return (
    <View>
      <Text style={styles.getcustomsText}>Consumption- ELONO62679</Text>
      <View style={styles.chartHeader}>
        <MaterialbarChart name="barschart" style={styles.chartImg} />
        <MaterialLinerChart name="chart-areaspline" style={styles.chartImg} />
        <DropDownPicker
          items={[
            {label: 'Daily', value: 'daily'},
            {label: 'Monthly', value: 'monthly'},
            {label: 'Yearly', value: 'year'},
          ]}
          defaultValue={status}
          containerStyle={{height: 30, width: '30%'}}
          style={styles.dropDown}
          value={status}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(item) => setStatus(item.value)}
          placeholder="Daily"
        />

        <DatePicker
          style={{width: '30%'}}
          date={date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2030-05-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => setDate(date)}
        />
        <DatePicker
          style={{width: '30%'}}
          date={endDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2030-05-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => setEndDate(date)}
        />
      </View>

      <BarChart
        style={styles.graphStyle}
        data={data}
        width={screenWidth}
        height={300}
        yAxisLabel=""
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
};
const initialLayout = {width: Dimensions.get('window').width};

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '7 days'},
    {key: 'second', title: '30 Days'},
    {key: 'third', title: 'Custom Date'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <>
      <View
        style={{
          flex: 0.1,
          backgroundColor: '#004445',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18,color:"white"}}>Consumption</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        indicatorStyle={{backgroundColor: 'black'}}
        indicatorContainerStyle={{backgroundColor: 'pink'}}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            getLabelText={({route: {title}}) => title}
            indicatorStyle={styles.indicator}
            tabStyle={styles.tabStyle}
            style={styles.tab}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 0.5,
  },
  tab: {
    backgroundColor: 'green',
  },
  tabStyle: {
    //backgroundColor: '#ff7e67',
    backgroundColor:"#4c756f"
  },
  indicator: {
    backgroundColor: 'black',
  },
  dropDown: {
    backgroundColor: '#fafafa',
    marginTop: '3%',
  },
  container: {
    flex: 1,
    fontSize: 22,
  },
  headerText: {
    flexDirection: 'row',
    fontSize: 18,
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
  },
  getcustomsText: {
    fontSize: 20,
    fontFamily: 'Roboto',
    paddingVertical: '2%',
    paddingHorizontal: '1%',
  },
  chartHeader: {
    flexDirection: 'row',
    paddingVertical: '5%',
    marginLeft: '1%',
  },
  chartImg: {
    marginTop: '3%',
    height: '80%',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Roboto',
    paddingHorizontal: 4,
    color: '#008771',
  },
  elecText: {
    fontSize: 19,
    fontFamily: 'Roboto',
  },
  total: {
    fontSize: 19,
    fontFamily: 'Roboto',
    color: '#008771',
  },
  dateText: {
    fontFamily: 'Roboto',
  },
  priceText: {
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  item: {
    flexDirection: 'row',
    fontSize: 20,
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    padding: '2%',
  },
  graphStyle: {
    backgroundColor: 'black',
  },
});