import { Banner, Button, Text, Title } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import { Image } from "react-native";

const { height, width } = Dimensions.get('window');

const HomeBanner = () => {
    return (
        <View style={styles.banner}>
            <Image
                style={styles.image}
                source={{ uri: 'https://images.squarespace-cdn.com/content/v1/5911f31c725e251d002da9ac/1613210424136-AS3MY547OBB5Y3GSQ359/Product+Photography' }} />
            <View style={styles.section}>
                <Title style={styles.heading}>New Spring Collection</Title>
                <Text style={styles.title}>Explore new sping collection</Text>
                <Button mode="contained" onPress={() => console.log('Pressed')} buttonColor="white">
                    Shop Now
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        width: width - 20,
        height: height * 0.25,
        borderRadius: 20
    },
    image: {
        width: width - 20,
        height: height * 0.25,
        borderRadius: 20,
        position: 'absolute',
    },
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 14,
        padding: 20
    },
    heading: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25
    },
    title:{
        color: 'white',
        fontFamily: 'cursive',
        fontSize: 20
    }
});

export default HomeBanner;