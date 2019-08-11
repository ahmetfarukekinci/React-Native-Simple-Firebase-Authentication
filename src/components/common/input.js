import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types'
const Input = ({ text, inputPlaceHolder, onChangeText, value, secureTextEntry,keyboardType }) => {
    return (
        <View style={styles.inputWrapper}>

            <Text style={styles.textStyle}> {text}</Text>

            <TextInput
                style={styles.inputStyle}
                placeholder={inputPlaceHolder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
            />

        </View>
    );
}; 

Input.propTypes={
    inputStyle: PropTypes.object,
    inputPlaceHolder: PropTypes.string.isRequired,
    onChangeText:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired,
    secureTextEntry:PropTypes.bool,
    keyboardType:PropTypes.string
}

const styles = StyleSheet.create({

    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 'auto',
        borderColor: '#E5E5E8',
        borderBottomWidth: 1
    },

    textStyle: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold'

    },
    inputStyle: {
        flex: 2,
        alignItems: 'center'

    }
});

export default Input; 