import React from 'react'
import { View, ActivityIndicator } from 'react-native';
const Spinner = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 5 }}>
            <ActivityIndicator />
        </View>
    )
}; 

export default Spinner;