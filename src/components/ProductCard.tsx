import { Text, Paragraph } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { Dimensions, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get('window');

const ProductCard = ({ item, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={{ uri: item?.images?.length > 0 ? item.images[0] : "https://eapi.savierp.com/media/DummyImage.png" }} />
                <View style={styles.section}>
                    <View style={styles.productInfo}>
                        <Text style={styles.title}>{item?.title ? item?.title : "Product"}</Text>
                        {/* <Text style={styles.title}>0.5</Text> */}
                    </View>
                    <Paragraph style={styles.productPrice}>${item?.price ? item?.price : 100}</Paragraph>
                </View>
                <View style={styles.whislist}>
                    <AntDesign name="heart" size={25} color={"red"} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: width - 220,
        backgroundColor: 'white',
        margin: 7,
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        position: 'relative',
        gap: 10
    },
    image: {
        height: height * 0.21,
        width: width - 220,
        borderRadius: 20,
    },
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    title: {
        color: 'black',
        fontSize: RFValue(15, height),
    },
    whislist: {
        backgroundColor: 'white',
        padding: 7,
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 7,
        top: 13,
        borderRadius: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productPrice: {
        fontSize: RFValue(18, height),
        color: 'black',
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    productInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 250,
        // backgroundColor: 'black'
    }
});

export default ProductCard;