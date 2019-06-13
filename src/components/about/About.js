import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
// import { Actions } from 'react-native-router-flux'

const About = () => {
    
    // const goToHome = () => {
    //     Actions.home()
    // };

    const { text, btnPrimary, container } = styles;

    return (
        <View style={container}>
            <Text style={text}>About Page</Text>
        </View>
    );

};

export default About;

const styles = StyleSheet.create({

    text:{
        fontSize: 25,
        color: '#fff'

    },

    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#747474',
        alignItems: 'center',
        justifyContent: 'center',            
    },
    
    btnPrimary:{
        borderWidth: 1,
        padding: 15,
        borderColor: 'black',
        backgroundColor: 'red',
        color: '#ffffff',
        margin: 10,
    }
});