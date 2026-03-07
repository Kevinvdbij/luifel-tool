import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  theme?: string;
  onPress?: () => void;
  enabled?: boolean;
};

export default function Button({ label, theme, enabled, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: enabled ? '#689f69' : '#cccccc' }]}
          onPress={onPress}
          disabled={!enabled}>
          <FontAwesome name="search" size={18} color="#ffffff" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#ffffff' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  if (theme === "website") {
    return(
      <View
        style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: enabled ? '#689f69' : '#cccccc' }]}
          onPress={onPress}
          disabled={!enabled}>
          <FontAwesome name="globe" size={18} color="#ffffff" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#ffffff' }]}>{label}</Text>
        </Pressable>
      </View>
    )
  }

    if (theme === "manufacturer") {
    return(
      <View
        style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: enabled ? '#ee7556' : '#cccccc' }]}
          onPress={onPress}
          disabled={!enabled}>
          <FontAwesome name="shopping-cart" size={18} color="#ffffff" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#ffffff' }]}>{label}</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
