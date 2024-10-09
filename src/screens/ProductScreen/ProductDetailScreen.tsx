import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigations/NavigationStack";
import { Button } from 'react-native-paper';
import api from "../../networking/apiclient";

type ProductDetailScreenProps = NativeStackScreenProps<RootStackParamsList, 'ProductDetailScreen'>

const ProductDetailScreen = ({ route, navigation }: ProductDetailScreenProps) => {

  const { productId } = route.params;
  const [product, setProduct] = useState<any>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/products/${productId}`);
      setLoading(false);
      if (response?.status == 200 && response?.data) {
        setProduct(response?.data);
      } else {
        setProduct([])
      }
    } catch (error) {
      setLoading(false);
      console.log("error==>", error)
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <View style={[styles.loadingContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="red" />
      </View>

    )
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product?.images?.length > 0 ? product.images[0] : "https://www.e-coexist.com/wp-content/uploads/woocommerce-placeholder-800x800.png" }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.price}>${product?.price?.toFixed(2)}</Text>
        <Text style={styles.description}>{product?.description}</Text>
      </View>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'black',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
    color: 'black'
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProductDetailScreen;