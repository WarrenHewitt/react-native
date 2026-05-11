import React from 'react'
import { createDrawerNavigator } from 'react-navigation';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView
} from 'react-native';

import Home from './view/Home'
import Novel from './view/novel/Novel'
import Cookbook from './view/cookbook/Cookbook'


export default createDrawerNavigator({
    home: {
        screen: Home
    },
    novel: {
        screen: Novel
    },
    cookbook: {
        screen: Cookbook
    },
}, {
    drawerBackgroundColor: '#ffffff',
    contentOptions: {
        activeTintColor: '#e91e63',
    }
});
