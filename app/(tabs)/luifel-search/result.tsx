import ProductCard from '@/components/ProductCard';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function LuifelResult() {

   const { ean } = useLocalSearchParams<{ ean: string }>();
   const eanArray = ean.split(',');

   console.log('EAN array:', eanArray);

  return (
    <View style={styles.container}>
      {eanArray.map((eanValue, index) => (
        <ProductCard key={index} title="Test product" ean={eanValue} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
  },
});
