import ProductCard from '@/components/ProductCard';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function LuifelResult() {
  
  const { ean } = useLocalSearchParams<{ ean: string }>();
  const eanArray = ean.split(",");
  //const eanArray = ["8004815351878", "8004815351878", "8004815351878", "8004815351878", "8004815351878"]

  return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          {eanArray.map((eanValue, index) => (
              <ProductCard key={index} style={styles.productCard} ean={eanValue} />
          ))}
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    minHeight: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  text: {
    color: '#000000',
  },
  productCard: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    minWidth: 300,
    width: 500,
    maxWidth: 600,
  }
});
