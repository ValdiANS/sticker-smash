import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CircleButton = ({ onPress }) => {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable onPress={onPress} style={styles.circleButton}>
        <MaterialIcons name='add' size={38} color='#25292e' />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    padding: 3,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
  },

  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
});

export default CircleButton;
