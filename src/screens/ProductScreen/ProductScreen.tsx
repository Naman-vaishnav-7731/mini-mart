import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigations/NavigationStack";
import api from "../../networking/apiclient";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Products/ProductCard";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Loader from "../../components/Loader";

type ProductScreenProps = NativeStackScreenProps<RootStackParamsList, 'ProductScreen'>

interface Product {
    id: number;
    title: string;
    price: number;
    images: []
}

const ProductScreen = ({ navigation }: ProductScreenProps) => {

    const [productData, setProductData] = useState<any>([]);
    const [loading, setLoading] = useState<Boolean>(false);

    const fetchProduct = async () => {
        setLoading(true);
        try {
            const response = await api.get('/products');
            setLoading(false);
            if (response?.status == 200 && response?.data) {
                setProductData(response?.data);
            } else {
                setProductData([])
            }
        } catch (error) {
            setLoading(false);
            console.log("error==>", error)
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    const renderItem = ({ item }: { item: Product }) => (
        <ProductCard
            item={item}
            onPress={() => navigation.navigate('ProductDetailScreen', { productId: item?.id })}
        />
    );

    if (loading) {
        return (
            <Loader size={50} color={"black"} />
        )
    }

    return (
        <FlatList
            renderItem={renderItem}
            data={productData?.products}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 10
    }
})

export default ProductScreen;