import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Container, Content, List, ListItem, Left, Thumbnail, Body, Right, Text } from 'native-base'

export default class ListComponent extends Component {
    render() {
        return (    
            <View
                style={{ flex: 1, paddingTop: 20 }}
            >
                <Container>
                    <Content>
                        <List>
                            <ListItem avatar onPress={() => {
                                this.props.navigation.navigate('Detail', {
                                    id: 0
                                })
                            }}>
                                <Left>
                                    <Thumbnail source={{ uri: 'http://img06.tooopen.com/images/20170819/tooopen_sy_221117653823.jpg' }} />
                                </Left>
                                <Body>
                                    <Text>回锅肉</Text>
                                    <Text note>一道好吃到板的菜</Text>
                                </Body>
                                <Right>
                                    <Text note>2018-08-21</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar onPress={() => {
                                this.props.navigation.navigate('Detail', {
                                    id: 1
                                })
                            }}>
                                <Left>
                                    <Thumbnail source={{ uri: 'http://m.tuniucdn.com/fb2/t1/G1/M00/A6/16/Cii9EVcoDoKIQTvkAANOEqYYDBkAAFKnAE3N0kAA04q955_w800_h400_c1_t0.jpg' }} />
                                </Left>
                                <Body>
                                    <Text>水煮鱼</Text>
                                    <Text note>又一道好吃到板的菜</Text>
                                </Body>
                                <Right>
                                    <Text note>2018-08-21</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar onPress={() => {
                                this.props.navigation.navigate('Detail', {
                                    id: 2
                                })
                            }}>
                                <Left>
                                    <Thumbnail source={{ uri: 'http://hiphotos.baidu.com/nuomi/pic/item/0df3d7ca7bcb0a46e68a98966263f6246a60aff0.jpg' }} />
                                </Left>
                                <Body>
                                    <Text>夫妻肺片</Text>
                                    <Text note>再一道好吃到板的菜</Text>
                                </Body>
                                <Right>
                                    <Text note>2018-08-21</Text>
                                </Right>
                            </ListItem>
                    </List>
                    </Content>
                </Container>

            </View>

        );
    }
}