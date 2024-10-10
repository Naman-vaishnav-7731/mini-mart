import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import Icon from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../screens/Home/Home';
import PermissionScreen from '../screens/PermissionScreen/PermissionScreen';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import AppBar from './AppBar';

export type RootStackParamsList = {
    Home: undefined,
    ProductScreen: undefined,
    LoginScreen: undefined,
    PermissionScreen: undefined,
    CategoriesScreen: undefined,
    CartScreen: undefined
}

const Tab = createMaterialBottomTabNavigator<RootStackParamsList>();

function HomeBottomBar() {
    return (
        <>
        <AppBar />
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => {
                    return <AntDesign name="home" size={25} color={"black"} />;
                },
            }} />
            <Tab.Screen name="CategoriesScreen" component={CategoriesScreen} options={{
                tabBarLabel: 'Categories',
                tabBarIcon: ({ color }) => {
                    return <AntDesign name="search1" size={25} color={"black"} />;
                },
            }} />
            <Tab.Screen name="ProductScreen" component={ProductScreen} options={{
                
                tabBarLabel: 'Explore',
                tabBarIcon: ({ color }) => {
                    return <AntDesign name="earth" size={25} color={"black"} />;
                },
                 
            }} />
            {/* <Tab.Screen name="LoginScreen" component={LoginScreen} options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color }) => {
                    return <Entypo name="login" size={25} color={"black"} />;
                },
            }} /> */}

            <Tab.Screen name="CartScreen" component={CartScreen} options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({ color }) => {
                    return <AntDesign name="shoppingcart" size={25} color={"black"} />;
                },
                tabBarBadge: 0
            }} />
            {/* <Tab.Screen name="PermissionScreen" component={PermissionScreen} options={{
                tabBarLabel: 'Camera',
                tabBarIcon: ({ color }) => {
                    return <Entypo name="camera" size={25} color={"black"} />;
                },
            }} /> */}
        </Tab.Navigator>
        </>
    );
}

export default HomeBottomBar;