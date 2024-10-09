import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';

const ProductCard = ({ item, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <Card style={styles.cardContainer}>
                <Card.Cover
                    source={{ uri: item?.images?.length > 0 ? item.images[0] : "https://eapi.savierp.com/media/DummyImage.png" }}
                    style={styles.cardImage}
                />
                <Card.Content style={styles.textContainer}>
                    <Title style={styles.productTitle}>{item?.title}</Title>
                    <Paragraph style={styles.productPrice}>{item?.price}</Paragraph>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
        borderRadius: 8,
        elevation: 2,
        width: 180,
        backgroundColor: 'white'
    },
    cardImage: {
        height: 150,
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    textContainer: {
        padding: 10,
        
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    productPrice: {
        fontSize: 14,
        color: 'gray',
    },
});

export default ProductCard;
