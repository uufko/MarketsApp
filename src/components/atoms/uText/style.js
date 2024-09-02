import {StyleSheet} from 'react-native';
import {UDevice} from '../../../assets/uDevice/uDevice';
import {UColors} from '../../../assets/uColors/uColors';

export const Style = StyleSheet.create({
  view: {
    height: UDevice.height * 0.07,
    width: UDevice.width * 0.55,
    justifyContent:"space-evenly",
    alignItems:"center",
  },
  text: {
    color: 'white',
    fontSize: UDevice.size * 0.5,
    fontFamily: 'Koblenz-Serial-Heavy',
  },
});
