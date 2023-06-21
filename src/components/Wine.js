import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export function Wine({name, price, image, onPress}) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.image} source={image}/>
            <View style={styles.infoContainer}>
                <Text style={styles.wineName}>{name}</Text>
                <Text style={styles.winePrice}>{price} lei</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        allignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%'
    },
    image: {
        width: '100%',
        height: 300,
        aspectRatio: 1,
        marginLeft: 20
    },
    infoContainer: {
        padding: 16
    },
    wineName: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    winePrice: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    }
});