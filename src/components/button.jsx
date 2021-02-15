import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Button({ btnName, bgColor, BtnBorderRadius, txtColor, onPress, width, height, flexBasis }) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                backgroundColor: bgColor,
                width: width,
                height: height,
                borderRadius: BtnBorderRadius,
                //    flex :1 , 
                // flexBasis : flexBasis ,
               
                justifyContent: 'center',
                alignItems: 'center'
            }}>


                <Text style={{ color: txtColor, fontSize: 18}}>{btnName}</Text>
            </View>


        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#282133",
    },

});
