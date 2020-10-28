import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#000000',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
  },
  buttonsWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
