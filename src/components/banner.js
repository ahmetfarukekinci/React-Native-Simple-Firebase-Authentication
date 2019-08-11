import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
const Banner = props => {
    return (
        <View style={styles.bannerContainer}>
            <Text style={styles.bannerText}>{props.text}</Text>
        </View>
    )
};

const { width, height } = Dimensions.get('window'); // this is how you can get window's width and height 

const styles = StyleSheet.create({
    bannerContainer: {
        width, // gets full width of screen
        height: height * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05a05a'
    },
    bannerText: {
        fontSize: height * 0.05,
        color: '#fff'
    }
});


export default Banner;