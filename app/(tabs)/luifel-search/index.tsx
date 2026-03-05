import LuifelPicker from '@/components/LuifelPicker';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function LuifelSelection() {

  return (
    <View style={styles.container}>
      <LuifelPicker onPress={(result) => router.push({ pathname: '/(tabs)/luifel-search/result', params: { ean: result } })}/>
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
  footer: {
    flex: 1/3,
    justifyContent: "flex-end",
  },
});
