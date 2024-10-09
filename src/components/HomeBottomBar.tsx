import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import Icon from 'react-native-vector-icons/Fontisto';
import Home from '../screens/Home/Home';

export type RootStackParamsList = {
    Home: undefined,
    ProductScreen: undefined,
}

const Tab = createMaterialBottomTabNavigator<RootStackParamsList>();

function HomeBottomBar() {
    return (
        <Tab.Navigator initialRouteName='Home'
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => {
                    return <Icon name="shopping-bag" size={25} color={"black"} />;
                },
            }} />
            <Tab.Screen name="ProductScreen" component={ProductScreen} options={{
                tabBarLabel: 'Product',
                tabBarIcon: ({ color, size }) => {
                    return <Icon name="shopping-bag" size={25} color={"black"} />;
                },
                
            }} />
              <Tab.Screen name="LoginScreen" component={LoginScreen} options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color, size }) => {
                    return <Icon name="login" size={25} color={"black"} />;
                },
                
            }} />
        </Tab.Navigator>
    );
}

export default HomeBottomBar;