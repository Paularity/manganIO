import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { Text } from 'react-native'
import Home from '../home/Home.js'
import About from '../about/About.js'

const HomeIcon = ({title, selected}) => ( <Text style={{color: 'red'}} >{title}</Text> );

const Routes = () => (
    <Router>
        <Scene key="root" >
            <Scene key = "home" component={Home} initial  />
            <Scene key = "about" component={About} />            
        </Scene>
    </Router>
);

export default Routes;  