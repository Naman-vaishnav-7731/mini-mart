import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import React from 'react';

const Loader = ({ size, color = MD2Colors.red800 }: any) => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator animating={true} color={color} size={size} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})

export default Loader;
