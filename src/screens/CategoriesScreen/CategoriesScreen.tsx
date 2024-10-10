import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView, SectionList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigations/NavigationStack";
import api from "../../networking/apiclient";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Products/ProductCard";
import Loader from "../../components/Loader";

type ProductScreenProps = NativeStackScreenProps<RootStackParamsList, 'CategoriesScreen'>

interface Product {
    id: number;
    title: string;
    price: number;
    images: []
}

const CategoriesScreen = ({ navigation }: ProductScreenProps) => {

    const [productData, setProductData] = useState<any>([]);
    const [loading, setLoading] = useState<Boolean>(false);

    const fetchProduct = async () => {
        setLoading(true);
        try {
            const response = await api.get('/products');
            setLoading(false);
            if (response?.status == 200 && response?.data) {
                
                const productsMap = response?.data?.products?.reduce((acc, item) => {
                    if (item?.category) {
                        if (!acc[item.category]) {
                            acc[item.category] = {
                                title: item.category,
                                data: []
                            };
                        }
                        acc[item.category].data.push(item);
                    }
                    return acc;
                }, {} as Record<string, { title: string; data: Product[] }>);

                const products = Object.values(productsMap || {});
                setProductData(products);
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
            key={item.id}
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
        <SafeAreaView style={styles.safeArea}>
            <SectionList
                renderItem={renderItem}
                sections={productData}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    list: {  
    //    backgroundColor: 'red',
       flexGrow: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        textTransform: 'capitalize'
    },
})

export default CategoriesScreen;