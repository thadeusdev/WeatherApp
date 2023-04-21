import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, Image } from "react-native"
import { Feather } from '@expo/vector-icons'

const DATA = [
    {
        "dt": 1661871600,
        "main": {
          "temp_min": 296.76,
          "temp_max": 297.87
        },
        "weather": [
          {
            "main": "Rain"
          }
        ],
        "dt_txt": "2022-08-30 15:00:00"
      },
      {
        "dt": 1661893200,
        "main": {
          "temp_min": 290.31,
          "temp_max": 292.46
        },
        "weather": [
          {
            "main": "Rain"
          }
        ],
        "dt_txt": "2022-08-30 18:00:00"
      },
]

const Item = (props) => {
    const {dt_txt, min, max} = props
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'}/>
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
            <Text></Text>
        </View>
    )
}
const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
    )
    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather</Text>
            <Image source={require('../../assets/upcoming-background.jpg')} style={styles.image}/>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 30,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'red'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink',
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    image: {
        height: 100,
        width: 200
    }
})

export default UpcomingWeather