import {  Text } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const CategoryCard = () => {
    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: 'https://images.squarespace-cdn.com/content/v1/5911f31c725e251d002da9ac/1613210424136-AS3MY547OBB5Y3GSQ359/Product+Photography' }} />
            <View style={styles.section}>
                <Text style={styles.title}>Perfume</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: width - 240,
        height: 190,
        // backgroundColor: '#f7e0df',
        margin: 10,
        padding: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: height * 0.18,
        borderRadius: 100,
        width: width - 250,
        overflow: 'hidden',
    },
    section:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    title: {
        color: 'black',
        fontSize: 17
    }
});

export default CategoryCard;