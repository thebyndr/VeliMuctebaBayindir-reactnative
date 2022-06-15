import React,{useEffect,useState} from 'react';
 import {View,Text,TextInput,Image,TouchableOpacity,StyleSheet,FlatList,ScrollView} from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons';
 import LinearGradient from 'react-native-linear-gradient';

const Detail=(props)=>{
    

                
                   
                    
    


console.log(props.route.params.Name)
    return(
       
<ScrollView style={style.container}>
    {/* GO BACK ICON */}
<TouchableOpacity onPress={()=>props.navigation.navigate('Home')} style={{margin:10}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-outline"}
  color={'black'}
  size={30}
      />
    </TouchableOpacity>
<Image source={{uri:props.route.params.Avatar}}
                       resizeMode="center"
                       style={{width:'100%',flex:5,height:250,alignSelf:'center',backgroundColor:'transparent'}}
                     
                     />
                     
                     <LinearGradient style={
    {flex:1,height:75}
} colors={['white','#fafafa','#fafafa','#f5f5f5','#f5f5f5','#f5f5f5','#eeeeee','#e0e0e0','#bdbdbd','#9e9e9e']}>


</LinearGradient>
<View style={{backgroundColor:'#9e9e9e',flex:5,height:500}}>
       <View style={{backgroundColor:'black',borderTopStartRadius:50,borderTopEndRadius:50, height:500}}>
       <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:7}}>
       
       <Text style={{color:'white',flex:8,fontSize:25,fontFamily:'Geomanist-Medium',margin:25}}>
           {props.route.params.Name}
       </Text>
       <Text style={{color:'white',flex:2,fontSize:16,fontFamily:'Geomanist-Medium',margin:25}}>
           $ {props.route.params.Price}
       </Text>
       
       </View>

       <Text style={{color:'white',fontFamily:'Geomanist-Regular',fontSize:14,margin:25}}>
          {props.route.params.Description}
       </Text>
       </View>
       </View>
  
</ScrollView>

    )
}
const style=StyleSheet.create({
    container:{
    
        flex:1
    },
  
right:{
    flexDirection:'column',
justifyContent:'center',
alignItems:'center'},
name:{
    color:'white',
    fontFamily:'serif',
  fontWeight:'700',
    fontSize:25
},
exitCont:{
marginLeft:5
},
exit:{
    color:'white',
    fontFamily:'sans-serif-light',
 
    fontSize:25
},
addCont:{
    marginLeft:5
    },
    add:{
        color:'white',
        fontFamily:'sans-serif-light',
        fontSize:25
    },
    itemTopCont:{
paddingHorizontal:10,
marginTop:15

    }
    ,
itemContainer:{
flex:1,
borderRightWidth:8,
borderTopWidth:4,
borderLeftColor:'#4ebaaa',
borderRightColor:'white',
borderLeftWidth:0,
borderBottomWidth:0,
borderBottomColor:'white',
borderTopColor:'white',
marginBottom:15,
marginHorizontal:10,
paddingVertical:15,
justifyContent:'center',
alignItems:'center',
height:120,
borderRadius:15,
backgroundColor:'#00897b'
},
itemContainerin:{
   
 
  
    justifyContent:'center',
    alignItems:'center',
 
  
    },
item:{
    color:'white',
    fontSize:17
    ,fontFamily:'serif'
},
//MODAL

input:{
    width:230,
    height:50, 
    borderRadius:15,
    backgroundColor:'#006466'
},
forminput:
{
    alignItems:'center',
justifyContent:'center',
flex:1,
borderRadius:25,
width:'100%',
backgroundColor:'#1b3a4b'
},

inputContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom:25
},
kayitolbutton:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#dad7cd',
    borderRadius:5,
    width:85,
    marginTop:25,
    height:43
},

kayitolbutton2:{
color:'#006466'
,fontSize:20,
fontWeight:'700'}

})
export default Detail