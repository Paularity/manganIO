import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
// import { Actions } from 'react-native-router-flux'

const Welcome = (props) => {
    
    // const goToAbout = () => {
    //     Actions.about()
    // };

    const { logo, header, p, a, btnPrimary, btnSecondary, btnTertiary, container } = styles;

    return (
        <View style={container}>
            <View style={container}>
                <Image style={logo} source={require('../../assets/images/logo.png')} />
                <Text style={header} >Mangan.IO</Text>                
            </View>
            <View style={container}>
                <TouchableOpacity onPress={ () => props.navigation.navigate('Dashboard') }>
                    <Text style={btnSecondary} >Login with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={btnPrimary} >Login with Google</Text>
                </TouchableOpacity>  
                <Text style={header}>OR</Text>   
                <TouchableOpacity>
                    <Text style={btnTertiary} >Sign In</Text>
                </TouchableOpacity>  
                <Text style={p}>Don't have a account yet? Sign up!</Text>         
            </View>
        </View>
    );

};

export default Welcome;

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
    
    btnPrimary:{
        width: 300,
        textAlign: 'center',
        borderWidth: 1,
        padding: 10,
        borderColor: '#fff',
        backgroundColor: 'red',
        color: '#ffffff',
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },

    btnSecondary:{        
        width: 300,
        textAlign: 'center',
        borderWidth: 1,
        padding: 10,
        borderColor: '#fff',
        backgroundColor: 'blue',
        color: '#ffffff',
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },

    btnTertiary:{        
        width: 300,
        textAlign: 'center',
        borderWidth: 1,
        padding: 10,
        borderColor: '#fff',
        backgroundColor: '#ef9a2d',
        color: '#ffffff',
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
});