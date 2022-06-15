import React,{useEffect,useState} from 'react';
 import {View,Text,RefreshControl,ActivityIndicator,Image,TouchableOpacity,StyleSheet,FlatList,ScrollView} from 'react-native'
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { useIsFocused } from "@react-navigation/native";
const Home=(props)=>{
    

                
                   
                    
    


const [data,setData]=useState([])
const isFocused = useIsFocused();
const [refreshing, setRefreshing] = useState(true);
const [data2,setData2]=useState([])
const [itemid,setItemid]=useState('')
const [itemName,setItemName]=useState('All')

const getProducts= async () => {
//     try {
//      const response = await fetch('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/');
//      const json = await response.json();
     
//      setData(json);
//    } catch (error) {
//      console.error(error);
//    } finally {
//      setLoading(false);
//    }

axios({
    method: 'get',
    url: 'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/',
  }).then((response) => {
    setData(response.data)
    setRefreshing(false)
  })
 }
 
const getCategories= async () => {
//     try {
//      const response = await fetch('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/');
//      const json = await response.json();
     
//      setData2(json);
//    } catch (error) {
//      console.error(error);
//    } finally {
//      setLoading(false);
//    }

axios({
    method: 'get',
    url: `https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/`,
  }).then((response) => {
    setData2(response.data);
    setRefreshing(false)
  });
 }
useEffect(()=>{

   getCategories()
   getProducts()
   if(isFocused){ 
    getCategories()
   getProducts()
}
 

},[props, isFocused])
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(100).then(() => setRefreshing(false));
  }, []);



     
const renderProducts=({item})=>{

  
 
      return (
      
      itemName==item.category ? //Show just chooesen categories product IF
<LinearGradient style={
    style.itemContainer
} colors={['white','white','white','white','white','#eeeeee','#e0e0e0','#e0e0e0','gray' ]}>

      <TouchableOpacity onPress={()=>props.navigation.navigate('Detail',{Description:item.description,Price:item.price,Avatar:item.avatar,Name:item.name})}  
      
      style={{flex:1,alignItems:'center',justifyContent:'center'}}>
 

  


<Image source={{uri:item.avatar}}
                resizeMode="center"
                style={{width:70,height:100,}}
              
              />
   
<View style={{backgroundColor:'black',width:'100%',height:40,borderRadius:10,position:'absolute',bottom:-5

}}>
<View style={{flexDirection:'column',justifyContent:'space-between',marginLeft:7}}>

<Text style={{color:'white',fontSize:12,fontWeight:'700'}}>
    {item.name}
</Text>
<Text style={{color:'white',fontSize:12,fontWeight:'700'}}>
    $ {item.price}
</Text>

</View>
</View>


       </TouchableOpacity>
     </LinearGradient>
       : //ELSE

       itemName=='All' ? // If user chose "All" show all products IF

       <LinearGradient style={
        style.itemContainer
    } colors={['white','white','white','white','white','#eeeeee','#e0e0e0','#e0e0e0','gray' ]}>
    
          <TouchableOpacity onPress={()=>props.navigation.navigate('Detail',{Description:item.description,Price:item.price,Avatar:item.avatar,Name:item.name})}  
          
          style={{flex:1,alignItems:'center',justifyContent:'center'}}>
     
    
      
    
    
    <Image source={{uri:item.avatar}}
                    resizeMode="center"
                    style={{width:70,height:100,}}
                  
                  />
       
    <View style={{backgroundColor:'black',width:'100%',height:40,borderRadius:10,position:'absolute',bottom:-5
    
    }}>
    <View style={{flexDirection:'column',justifyContent:'space-between',marginLeft:7}}>
    
    <Text style={{margin:2,color:'white',fontSize:12,fontFamily:'Geomanist-Medium'}}>
        {item.name}
    </Text>
    <Text style={{color:'white',fontSize:12,fontFamily:'Geomanist-Medium'}}>
        $ {item.price}
    </Text>
    
    </View>
    </View>
    
    
           </TouchableOpacity>
         </LinearGradient>
              ://ELSE 
              <View></View>
       )
      
    }
   




const renderCategories=({item})=>{
    return <View style={{backgroundColor:'transparent'}}>

    
    
    
    <TouchableOpacity onPress={()=>{setItemid(item.id),setItemName(item.name)}}
     style={
        item.id==itemid? //Choosen Category Style 
        {marginLeft:25,borderWidth:2,borderColor:'black',backgroundColor:'white',height:40,borderRadius:10,justifyContent:'center',alignItems:'center'
        
        }
        :
        {marginLeft:25,borderWidth:2,borderColor:'black',backgroundColor:'black',height:40,borderRadius:10,justifyContent:'center',alignItems:'center'
        
    }
        }>


<Text style={
     item.id==itemid? //Choosen Category Text Style 

    {color:'black',fontSize:12,fontFamily:'Geomanist-Black',margin:10}
    :
    {color:'white',fontSize:12,fontFamily:'Geomanist-Black',margin:10}
    }>
    {item.name}
</Text>



</TouchableOpacity>
</View>
  
   
}


    return(
       <View style={{
        flex:1,
        position:'relative',
       
       }}>

      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../assets/Logo.png')}
                resizeMode="center"
                style={{width:80,height:50}}
              
              />
              <Text style={{color:'black',fontSize:17,fontFamily:'KdamThmorPro-Regular'}}>UPayments Store</Text>
      </View>

      

 

<ScrollView style={style.container}>



<View style={style.itemTopCont}>
       <FlatList 
       data={data2}
       
       horizontal={true}
       renderItem={renderCategories}
      />


   </View>
   <View style={style.itemTopCont}>
       <FlatList 
       data={data}
       renderItem={renderProducts}
       numColumns={2}
       
       refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}  />}
       />
       


   </View>
  

  </ScrollView>
<TouchableOpacity onPress={()=>props.navigation.navigate('CreateScreen')} style={{alignItems:'center',justifyContent:'center',width:45,height:45,position:'absolute',bottom:50,right:25,backgroundColor:'white',borderRadius:25,borderWidth:2,borderColor:'black'}}>
 <Text style={{fontSize:30,fontWeight:'500',color:'black'}}>+</Text>
  </TouchableOpacity>
  
</View>

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

shadowOffset: { width: 10, height: 10 },
shadowColor: 'black',
shadowOpacity: 1,
elevation: 25,

marginBottom:15,
marginHorizontal:10,

justifyContent:'center',
alignItems:'center',
height:180,
borderRadius:15,
backgroundColor:'white'
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
export default Home