import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'

const Dashboard = (props) => {

    const { header, container } = styles;

    return (
        <View style={container}>
            <View style={container}>
                <Text style={header} >Dashboard</Text>                
            </View>
        </View>
    );

};

export default Dashboard;

const styles = StyleSheet.create({

    logo:{
        width: 200,
        height: 200,
    },

    header:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',

    },

    p:{
        fontSize: 12,
        color: "#ffffff",
    },  

    a:{
        color: '#ef9a2d'
    },

    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#323232',
        alignItems: 'center',
        justifyContent: 'center',            
    },
});