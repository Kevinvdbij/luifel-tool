import LuifelPicker from '@/components/LuifelPicker';
import { StyleSheet, Text, View } from 'react-native';

export default function LuifelSelection() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Luifel screen</Text>
      <LuifelPicker />
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
  }
});
