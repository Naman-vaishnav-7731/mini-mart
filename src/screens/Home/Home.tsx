import {
    SafeAreaView, View, StyleSheet, useColorScheme, ScrollView, TouchableHighlight, Image
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigations/NavigationStack";
import React from "react";
import AppBar from "../../components/AppBar";
import HomeBanner from "../../components/HomeBanner";
import TitleBar from "../../components/TitleBar";
import HomeCategoryList from "../../components/Category/HomeCategoryList";
import ProductCard from "../../components/ProductCard";
import { Searchbar } from 'react-native-paper';


type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, "Home">

const Home = ({ navigation }: HomeScreenProps) => {
    const isDarkMode = useColorScheme() === "dark";
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <>
            <SafeAreaView style={style.container}>
            <Searchbar
                        placeholder="Search Your Product"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        iconColor="black"
                        placeholderTextColor={"black"}
                        style={{backgroundColor: 'white', color: 'black'}}
                    />
                <ScrollView contentContainerStyle={{ flexGrow: 1, margin: 5 }}>
                   
                    <HomeBanner />
                    <TitleBar title="Shop by Category" />
                    <HomeCategoryList />
                    <TitleBar title="Popular" />
                    <ProductCard />
                </ScrollView>
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