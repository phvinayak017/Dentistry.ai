import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigation } from 'react-navigation-stack'
import Axios from 'axios'
var moment = require('moment');

export default class Cards extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#536dfe',
        },
        headerTintColor: '#fff',
    }
    constructor(props) {
        super(props);
        this.state = {
            current: "https://images.dog.ceo/breeds/terrier-american/n02093428_8744.jpg",
            likedImages: [],
            time: new Date()
        }
    }

    componentDidMount() {
    }

    getNext = () => {
        const url = "https://dog.ceo/api/breeds/image/random"
        Axios
            .get(url)
            .then(({ data: { message: url } }) => {
                this.setState({
                    current: url,
                })
            })
    }

    handleLike = () => {
        this.setState(state => ({ likedImages: [...state.likedImages, { url: state.current, when: new Date() }] }))
        // console.log(time)
        this.getNext()
    }

    handleDislike = () => {
        this.getNext()
    }

    handleShow = () => {
        this.props.navigation.navigate("List", {
            likedImages: this.state.likedImages,
        }, { title: 'My favorite' })
    }

    render() {
        return (
            <View>
                <Text style={styles.heading}>Dogs Profile </Text>
                <View style={styles.statusStyle}>
                    <Card style={styles.cardStyle}>
                        <View style={{ height: 300, width: 250 }}>
                            <Image
                                source={{ uri: this.state.current }}
                                style={{ width: '100%', height: 250 }}
                            />
                        </View>
                        <View style={styles.detailWrapper}>
                            <Button
                                raised
                                type="outline"
                                buttonStyle={{ height: 60, width: 60, borderRadius: 30 }}
                                icon={{ name: 'clear', color: '#536dfe', size: 25 }}
                                title=''
                                onPress={this.handleDislike} />
                            <Button
                                raised
                                type="outline"
                                buttonStyle={{ height: 60, width: 60, borderRadius: 30 }}
                                icon={{ name: 'favorite', color: '#536dfe', size: 25 }}
                                title=''
                                onPress={this.handleShow} />
                            <Button
                                raised
                                type="outline"
                                buttonStyle={{ height: 60, width: 60, borderRadius: 30 }}
                                icon={{ name: 'done', color: '#536dfe', size: 25 }}
                                title=''
                                onPress={this.handleLike} />
                        </View>
                    </Card>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    heading: {
        marginLeft: '32%',
        marginTop: 20,
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        color: "#536dfe"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    statusStyle: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    detailWrapper: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    btnstyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardStyle: {
        marginBottom: 10,
    }
});
