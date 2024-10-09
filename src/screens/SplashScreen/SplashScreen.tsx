import { FC, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigations/NavigationStack";

type SplashScreenProps = NativeStackScreenProps<RootStackParamsList, "SplashScreen">

const SplashScreen = ({ navigation }: SplashScreenProps) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeBottomBar');
        }, 2000)
    })

    return (
        <SafeAreaView style={Style.mainContainer}>
            <Image source={{
                uri: 'https://images.squarespace-cdn.com/content/v1/5911f31c725e251d002da9ac/1613210424136-AS3MY547OBB5Y3GSQ359/Product+Photography'
            }} style={Style.image} />
            <View >
                <Text style={Style.mainText}>Mini Shop</Text>
            </View>
        </SafeAreaView>
    )
}

const Style = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'cursive',
        margin: 20
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        borderRadius: 100
    },
})

export default SplashScreen;