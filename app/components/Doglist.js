import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
var moment = require('moment');

export default class Doglist extends Component {

    static navigationOptions = {
        title: 'My Favorites',
        headerStyle: {
            backgroundColor: '#536dfe',
        },
        headerTintColor: '#fff',
    }

    getDisplayDate = date => {
        // current = new Date()
        // diff = Math.floor((current - date) / 1000)
        // if(diff<3600)
        diff = moment(date).fromNow()
        return diff
    }
    render() {
        const { navigation } = this.props;
        const likedDogs = navigation.getParam('likedImages', 'images');
        return (
            <View>
                <Text style={styles.heading}>Liked List </Text>
                <ScrollView>
                    {likedDogs.map((dog, id) => {
                        return (
                            <Card key={id} style={styles.cardStyle}>
                                <View style={styles.detailWrapper} >
                                    <Image
                                        source={{ uri: dog.url }}
                                        resizeMode="cover"
                                        style={{ width: "50%", height: 125 }}
                                    />
                                    <Text style={styles.text}> {this.getDisplayDate(dog.when)}</Text>
                                </View>
                            </Card>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    heading: {
        marginLeft: '33%',
        marginBottom: 10,
        marginTop: 20,
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        color: "#536dfe"
    },
    detailWrapper: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardStyle: {
        marginBottom: 10,
        height: 150,
        width: 250
    },
    text: {
        marginTop: 50,
        marginRight: 30,
        marginRight: 10,
    }
}); <p></p>