import LuifelPicker from '@/components/LuifelSearch';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function LuifelSelection() {

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <LuifelPicker onPress={(result) => router.push({ pathname: '/(tabs)/luifel-search/result', params: { ean: result } })}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#fff"
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
  },
});
