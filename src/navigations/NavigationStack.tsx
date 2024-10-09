import { FC } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import ProductScreen from "../screens/ProductScreen/ProductScreen";
import ProductDetailScreen from "../screens/ProductScreen/ProductDetailScreen";
import Home from "../screens/Home/Home";
import HomeBottomBar from "../components/HomeBottomBar";
import LoginScreen from "../screens/Auth/LoginScreen";

export type RootStackParamsList = {
    LoginScreen: undefined,
    HomeBottomBar: undefined,
    SplashScreen: undefined,
    Home: undefined,
    ProductScreen: undefined,
    ProductDetailScreen: { productId: number, }
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

const NavigationStack: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeBottomBar">
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeBottomBar" component={HomeBottomBar} options={{ headerShown: false }} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen
                    name="ProductScreen"
                    component={ProductScreen}
                    options={{ headerShown: true, title: "Our Top Products" }}
                />
                <Stack.Screen
                    name="ProductDetailScreen"
                    component={ProductDetailScreen}
                    options={{ headerShown: true, title: "Product Detail" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack;