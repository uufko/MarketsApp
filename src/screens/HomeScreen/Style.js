import {StyleSheet} from 'react-native';
import {UDevice} from '../../assets/uDevice/uDevice';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#feede6',
    
  },
  textStyle: {
    paddingTop:UDevice.height*.02,
    fontSize: UDevice.size,
    fontFamily: 'Koblenz-Serial-Heavy',
    color: '#feede6',
    alignSelf: 'center',
    height: UDevice.height * 0.22,
  },
});
