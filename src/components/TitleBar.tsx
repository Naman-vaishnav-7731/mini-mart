import { Banner, Button, Text, Title } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const TitleBar = ({ title } : any) => {
    return (
        <View style={styles.bar}>
            <View style={styles.section}>    
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.seeAll}>see all</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        width: width - 20,
        height: 50,
        backgroundColor: 'white',
        margin: 5,
    },
    section: {
        flex: 1,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    seeAll: {
        color: 'red',
        fontSize: 18
    }
});

export default TitleBar;