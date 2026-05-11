import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native'

export default class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./../public/img/menu.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (    
            <View
                style={{ flex: 1, marginTop: 20 }}
            >
                <View
                    style={{ flex: 1, alignItems:'center', justifyContent: 'center' }}
                >
                    <TouchableHighlight 
                        underlayColor={ '#fff' }
                        activeOpacity={ 1 }
                        onPress={ () => this.props.navigation.openDrawer() }>
                        <Image
                            style={{ height: 220, width: 220, borderRadius: 110 }}
                            source={require('./../public/img/avatar.jpg')}
                        />
                     </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
});