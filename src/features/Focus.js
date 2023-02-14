import React , {useState} from 'react';
import { View ,Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes'

export const Focus =({addSubject})=>{
  const [subject,setSubject] = useState(null) //used to store the value from user
  // console.log(subject)
  return(
  <View style={styles.container}>
    <View  style={styles.inputContainer}>
      <TextInput style ={styles.textInput} onChangeText={setSubject} label="Which is good Vs code or Expo?" />
      <View style={styles.button}>
      <RoundedButton  title="hi" size={50} onPress={()=>addSubject(subject)}/>
      </View>
    </View>
  </View>
)
};
const styles = StyleSheet.create({
  container: {

  },
  button:{
    justifyContent:'center'

  },
  textInput: {
     flex: 1,
     marginRight: spacing.sm,
  },
  inputContainer: {
    padding:spacing.lg,
    justifyContent: 'top',
    flexDirection : 'row',
  },
});
