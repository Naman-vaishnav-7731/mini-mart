import { SafeAreaView, View, StyleSheet, useColorScheme, TouchableHighlight, Image
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigations/NavigationStack";
import React from "react";
import AppBar from "../../components/AppBar";

// Define Here Props Type of Home Screeen
type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, "Home">

const Home = ({ navigation }: HomeScreenProps) => {
    const isDarkMode = useColorScheme() === "dark";
    return (
        <>
            <AppBar />
            <SafeAreaView style={style.container}>
                <View>
                    <TouchableHighlight underlayColor={'white'} onPress={() => navigation.navigate('ProductScreen')}>
                        <Image source={require('./banner.png')} style={style.cardImage} />
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Home;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'white'
    },
    lightText: {
        color: 'black',
        fontSize: 30,
        padding: 5,
        fontFamily: 'cursive',
    },
    darkText: {
        color: "black",
    },
    cardImage: {
        height: 500,
        width: 400,
        resizeMode: 'cover',
    }
})