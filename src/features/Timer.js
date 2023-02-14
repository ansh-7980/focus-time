import React ,{useState} from 'react';
import {View , Text, StyleSheet} from 'react-native';
import { Platform, Vibration } from 'react-native';
import {Countdown} from '../components/Countdown'
import {RoundedButton} from '../components/RoundedButton'
import { ProgressBar } from 'react-native-paper';
import {useKeepAwake} from 'expo-keep-awake'
import {spacing} from '../utils/sizes'
import {colors} from '../utils/colors';
import {Timing} from './Timing'
const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer =({focusSubject ,clearSubject , onTimerEnd})=>{
  useKeepAwake();
  const [isStarted ,setIsStarted]=useState(false);
  const [progress,setProgress]= useState(1);
  const [minutes,setMinutes]=useState(0.1);
  const onEnd =(reset)=>{
     Vibration.vibrate(PATTERN)
     setIsStarted(false)
     setProgress(1)
     reset();
     onTimerEnd(focusSubject);
  }
  return(

  <View style={styles.container}>
  <View style={styles.countDown}>
    <Countdown minutes={minutes} isPaused={!isStarted} onProgress={setProgress} onEnd={onEnd}/>

    <View style={{ paddingTop: spacing.xxl}}>
    <Text style={styles.title}> Focusing On:</Text>
    <Text style={styles.task}>{focusSubject}</Text>

    </View>
          
  </View>
  <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress ={progress}
          color='white'

          style={{marginTop:50, height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
       <Timing onChangeTime ={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
       <RoundedButton size={50} title="👀" onPress={clearSubject} />
      </View>
  </View>

);};

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  countDown: {
    flex:0.5,
    alignItems:'center',
    justifyContent: 'center' 
  },
  timingWrapper:{
    flex:0.1,
    padding:spacing.xxl,
    flexDirection:'row'
  },
  buttonWrapper:{
    flex:0.3,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:spacing.md
  },
  clearSubjectWrapper:{
    flexDirection:'row',
    justifyContent:'center'
  },
  title:{
    color:colors.white,
    fontWeight:'bold',
    textAlign:'center'
  },
  task:{
    color:colors.white,
    textAlign:'center'
  }
})
