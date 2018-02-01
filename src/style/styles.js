import {
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
   
 container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#F5FCFF'
 },

  text: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    backgroundColor: 'transparent',
    fontSize: 100,
    fontWeight: '100',
    fontFamily: 'Helvetica',
    color: 'white',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: null,
    height: null,
  },
  picker:{
    position:'absolute',
    alignItems:'center',
    marginHorizontal:90,
    marginVertical:60,  
  },
  pickerIOS:{
    left:25,
    right:25,
  },
  pickerAndroid:{    
    left:20,
    width:150,
    color:'white'     
  },
 
})

export default styles;
