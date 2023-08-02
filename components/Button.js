import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Button = ({ label, theme = 'default', onPress }) => {
  const DefaultButton = (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );

  const PrimaryButton = (
    <View
      style={[
        styles.buttonContainer,
        {
          borderWidth: 4,
          borderColor: '#ffd33d',
          borderRadius: 18,
        },
      ]}
    >
      <Pressable
        onPress={onPress}
        style={[styles.button, { backgroundColor: '#fff' }]}
      >
        <FontAwesome
          name='picture-o'
          size={18}
          color='#25292e'
          style={styles.buttonIcon}
        />

        <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
      </Pressable>
    </View>
  );

  const buttons = {
    default: DefaultButton,
    primary: PrimaryButton,
  };

  return buttons[theme];
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    padding: 3,
    marginHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  buttonIcon: {
    paddingRight: 8,
  },

  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
