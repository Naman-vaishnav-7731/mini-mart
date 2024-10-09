import { Appbar } from 'react-native-paper';
import { Platform, StyleSheet } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const AppBar = () => {
    return (
        <Appbar.Header style={style.header}>
            <Appbar.Content title="Mini Mart"  color='black'/>
            <Appbar.Action icon="magnify" onPress={() => { }} color='black'  />
            <Appbar.Action icon={MORE_ICON} onPress={() => { }} color='black' />
        </Appbar.Header>
    )
}

const style = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        color: 'black',
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

export default AppBar;