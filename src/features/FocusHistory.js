import React from 'react';
import {View ,Text,StyleSheet , FlatList} from 'react-native';
import{colors} from '../utils/colors';
import{fontSizes} from '../utils/sizes';
import{spacing} from '../utils/sizes'



export const FocusHistory=({history})=>{
 if(!history || !history.length) return <Text style={styles.title}> we havn't  focused on:</Text>;

 const renderItem =({item})=><Text style={styles.item}>⏩{item} </Text>
 
  return(
    
     <View style={styles.container}>
      <Text style={styles.title}> we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  )

}

const styles =StyleSheet.create({
  container:{
     padding:spacing.md,
     flex:1,

  },
  item:{
    fontSize:fontSizes.md,
    color:colors.white,
    textAlign:'center',
    paddingTop:spacing.sm

  },
  title: {
    color:colors.white,
    fontSize:fontSizes.md,
    textAlign:'center',
    fontWeight: 'bold'
  }
})