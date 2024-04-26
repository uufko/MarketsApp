import {StyleSheet} from 'react-native';
import {UDevice} from '../../../assets/uDevice/uDevice';
import {UColors} from '../../../assets/uColors/uColors';

export const Style = StyleSheet.create({
  touchable: {
    height: UDevice.height * 0.17,
    width: UDevice.width * 0.55,
    alignSelf: 'center',
    borderRadius: UDevice.width * 0.2,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 10,
    shadowOffset: {height: 7, width: 3},
  },
  image: {
    alignSelf: 'center',
  },
});
