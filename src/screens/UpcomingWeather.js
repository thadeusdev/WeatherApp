import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground } from "react-native"
import ListItem from '../components/ListItem'

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

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <ListItem 
          condition={item.weather[0].main} 
          dt_txt={item.dt_txt} 
          min={item.main.temp_min} 
          max={item.main.temp_max}
        />
    )

    const { container, image } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/upcoming-background.jpg')} style={image}>
                <Text>Upcoming Weather</Text>            
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'red',
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }
})

export default UpcomingWeather