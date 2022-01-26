
import React from 'react'
import { Image, Text, View, StyleSheet, Pressable } from "react-native"


const Card = ({product, handlePress, navigation}) => {

    return (
        <Pressable style={styles.cardContainer} onPress={() => handlePress(product)}>
            <Image
                style={styles.cardImage}
                source={{uri: `${product.thumbnail}`}}
            />
            <View style={styles.cardTextContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.cardTitle}>{product.title}</Text>
                </View>
                <Text style={styles.priceText}>${product.price}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        borderBottomWidth: 0.3,
        borderTopWidth: 0.3,
        height: 140,
    },
    cardImage: {
        margin: 5,
        flex: 2,
        resizeMode: 'contain',
    },
    cardTextContainer: {
        display: 'flex',
        marginTop: 15,
        marginLeft: 10,
        flex: 3,
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '46%'
    },
    cardTitle: {
        fontSize: 15,
        color: 'black',
        flex: 1,
        flexWrap: 'wrap',
    },
    priceText: {
        marginTop: 15,
        fontSize: 23,
        color: 'black'
    }
})

export default Card