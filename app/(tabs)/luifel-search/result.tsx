import ProductCard from '@/components/ProductCard';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function LuifelResult() {

   const { ean } = useLocalSearchParams<{ ean: string }>();
   const eanArray = ean.split(",");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {eanArray.map((eanValue, index) => (
        <View style={styles.productCard}>
          <ProductCard key={index} ean={eanValue} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center"
  },
  text: {
    color: '#000000',
  },
  productCard: {
    flex: 1,
    padding: 20,
    width: "100%",
    height: "auto",
    maxWidth: 800,
    
  }
});
