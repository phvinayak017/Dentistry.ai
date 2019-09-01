import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { StackNavigation } from 'react-navigation-stack'
import Axios from 'axios'

export default class Cards extends Component {
    static navigationOptions = {
        title: 'First Screen'
    }
    constructor(props) {
        super(props);
        this.state = {
            images: "https://images.dog.ceo/breeds/terrier-american/n02093428_8744.jpg",
            likedImages: []
        }
    }

    handleLike = () => {
        const url = "https://dog.ceo/api/breeds/image/random"
        Axios
            .get(url)
            .then(({ data: { message: url } }) => {
                this.setState({
                    images: url,
                })
            })
        console.log(this.state.images)
    }


    handleDislike = () => {
        const url = "https://dog.ceo/api/breeds/image/random"
        Axios
            .get(url)
            .then(({ data: { message: url } }) => {
                this.setState({
                    images: url
                })
            })
        console.log(this.state.images)
    }

    handleShow = () => {
        this.props.navigation.navigate("second", {
            itemId: 86,
            otherParam: 'anything you want here',
        })
    }

    render() {
        return (
            <View>
                <Text style={styles.heading}>Dogs Profile </Text>
                <View style={styles.statusStyle}>
                    <Card style={styles.cardStyle}>
                        <View style={{ height: 300, width: 250 }}>
                            <Image
                                source={{ uri: this.state.images }}
                                style={{ width: '100%', height: 250 }}
                            />
                        </View>
                        <View style={styles.detailWrapper}>
                            <Button
                                raised
                                icon={{ name: 'clear' }}
                                title=''
                                onPress={this.handleDislike} />
                            <Button
                                raised
                                icon={{ name: 'favorite' }}
                                title=''
                                onPress={this.handleShow} />
                            <Button
                                raised
                                icon={{ name: 'done' }}
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
        marginLeft: '30%',
        marginTop: 20,
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 10
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
        // marginBottom: 10
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
