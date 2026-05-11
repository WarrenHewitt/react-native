import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Text } from 'native-base'
import server from '../server/server'

export default class Detail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.navigation.getParam('id'),
            data: [
                {
                    name: '回锅肉',
                    step: ['1.买肉', '2.煮肉', '3.炒肉'],
                },
                {
                    name: '水煮鱼',
                    step: ['1.买鱼', '2.炒料', '3.煮鱼'],
                },
                {
                    name: '夫妻肺片',
                    step: ['1.买肺片', '2.煮肺片', '3.起锅'],
                }
            ]
        }
    }
    
    componentDidMount() {
        // this.setState({
        //     isd: this.props.navigation.getParam('id')
        // })
    }

    render() {
        return (    

            <View
                style={{ flex: 1, marginTop: 20 }}
            >
                <View>
                    <Text> { this.state.data[this.state.id].name }</Text>
                </View>
                {
                    this.state.data[this.state.id].step.map((v, index) => {
                        return <View
                                    key={index}
                                >
                                    <Text> { v }</Text>
                                </View>
                    })
                }
            </View>

        );
    }
}