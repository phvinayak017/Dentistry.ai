import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'

export default class Doglist extends Component {
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        console.log(itemId, otherParam)
        return (
            <View>
                <Text style={styles.heading}>Liked List </Text>
                <Card style={styles.cardStyle}>
                    <View style={styles.detailWrapper} >
                        <Image
                            source={{ uri: "https://images.dog.ceo/breeds/terrier-american/n02093428_8744.jpg" }}
                            style={{ width: '50%', height: 150 }}
                        />
                        <Text style={styles.text}> 00: mins Ago</Text>
                    </View>
                </Card>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    heading: {
        marginLeft: '30%',
        marginBottom: 10,
        marginTop: 20,
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 10
    },
    detailWrapper: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: 10
    },
    cardStyle: {
        marginBottom: 10,
        height: 150,
        width: 250
    },
    text: {
        marginTop: 70,
        marginRight: 30,
    }
}); <p></p>