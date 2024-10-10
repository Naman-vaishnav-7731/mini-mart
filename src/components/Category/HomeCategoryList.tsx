import { StyleSheet, View, Image, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import { Dimensions } from "react-native";

const { height } = Dimensions.get('window');

const HomeCategoryList = () => {
    return (
        <View style={styles.container} >
            <ScrollView horizontal>
                {Array.from({ length: 10 }, (_, i) => (
                    <CategoryCard />
                ))}
            </ScrollView></View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.27
    },
});

export default HomeCategoryList;