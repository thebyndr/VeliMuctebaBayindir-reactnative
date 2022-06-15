import React,{useEffect,useState} from 'react';
 import {View,Text,TextInput,Image,TouchableOpacity,StyleSheet,FlatList,ScrollView} from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons';

 import { Formik } from 'formik';
 import * as Yup from 'yup'
 import axios from "axios"
const CreateScreen=(props)=>{
    
    const getCategories2= async () => {

        axios({
            method: 'get',
            url: `https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/`,
          }).then((response) => {
            setData(response.data);
          });

    }
   
                   
                    
    // const getCategories= async () => {
    //     try {
    //      const response = await fetch('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/');
    //      const json = await response.json();
         
    //      setData(json);
    //    } catch (error) {
    //      console.error(error);
    //    }
    //  }


    const [data,setData]=useState([])
    const [itemid,setItemid]=useState('')
    const [itemName,setItemName]=useState('')



useEffect(()=>{
    
getCategories2()
},[])



//FLATLIST RENDER FUNCTION
const renderCategories=({item})=>{
    return <View style={{backgroundColor:'transparent'}}>

    
    <TouchableOpacity onPress={()=>{setItemid(item.id),setItemName(item.name)}}
     style={
        item.id==itemid? //For choosen Category Style 
        {marginLeft:25,borderWidth:2,borderColor:'black',backgroundColor:'black',height:40,borderRadius:10,justifyContent:'center',alignItems:'center'
        
        }
        :
        {marginLeft:25,borderWidth:2,borderColor:'black',backgroundColor:'white',height:40,borderRadius:10,justifyContent:'center',alignItems:'center'
        
    }
        }>


<Text style={
     item.id==itemid? //For choosen Category Text Style 

    {color:'white',fontSize:12,fontFamily:'Geomanist-Black',margin:10}
    :
    {color:'black',fontSize:12,fontFamily:'Geomanist-Black',margin:10}
    }>
    {item.name}
</Text>



</TouchableOpacity>
</View>
  
   
}

//POST , GO HOME PAGE AND SHOW SUCCES MODAL 
const addProduct =(values,{setSubmitting,resetForm})=>{
itemName==''?alert('Please Choose a Category')
:
axios.post('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products', {
    
       
        name: values.ProductTitle,
        avatar: values.ImageLink,
        developerEmail: "bayindir.411@gmail.com",
        price: values.Price,
       description:values.Description,
        category: itemName
    
})
    .then(function (response) {
        axios({
            method: 'get',
            url: `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products`,
          }).then((response) => {
           console.log(response.data);
          });
        props.navigation.navigate('Home');
    })
    .catch(function (error) {
        console.log(error);
    });

}


    return(
       
<ScrollView style={style.container}>
    {/* GO BACK ICON */}
    <TouchableOpacity onPress={()=>props.navigation.navigate('Home')} style={{margin:10}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-outline"}
  color={'black'}
  size={30}
      />
    </TouchableOpacity>

<Formik initialValues={{
      ProductTitle:'',
      Price:'',
      Description:'',
      ImageLink:''
      
  }}
  
  onSubmit={addProduct}
  
  validationSchema={
      Yup.object().shape({
    
     ProductTitle:Yup.string().required('Please Enter Product Title'),
     Price:Yup.string().required('Please Enter Price'),
     Description:Yup.string().required('Please Enter Description'),
     ImageLink:Yup.string().required('Please Enter Image Link')
    })
  }
  >
{({values,handleSubmit,errors,handleChange,isValid,isSubmitting})=>(

    <View style={style.forminput}>

{/* PRODCUT TITLE */}
   <View style={style.inputContainer}>
<TextInput 
value={values.ProductTitle}
autoCapitalize='none'
placeholder='Product title'
placeholderTextColor={'gray'}
onChangeText={handleChange('ProductTitle')}
style={style.input}
/>
{/* Control that is any input entered , if false show error products */}
{(errors.ProductTitle)&&<Text style={{color:'red',fontSize:18,fontFamily:'sans-serif-condensed'}}>{errors.ProductTitle}</Text>}
        </View>



 {/* PRICE */}
        <View style={style.inputContainer}>
<TextInput 
value={values.Price}
autoCapitalize='none'
placeholder='Price'
keyboardType='numeric'
placeholderTextColor={'gray'}
onChangeText={handleChange('Price')}
style={style.input}
/>
{/* Control that is any input entered , if false show error products */}
{(errors.Price)&&<Text style={{color:'red',fontSize:18,fontFamily:'sans-serif-condensed'}}>{errors.Price}</Text>}
        </View>
     


     {/* DESCRIPTION */}
        <View style={style.inputContainer}>
<TextInput 
value={values.Description}
autoCapitalize='none'
placeholder='Description'
multiline={true}
placeholderTextColor={'gray'}
onChangeText={handleChange('Description')}
style={style.inputDescription}
/>
{/* Control that is any input entered , if false show error products */}
{(errors.Description)&&<Text style={{color:'red',fontSize:18,fontFamily:'sans-serif-condensed'}}>{errors.Description}</Text>}
        </View>



{/* IMAGE LINK */}
        <View style={style.inputContainer}>
<TextInput 
value={values.ImageLink}
autoCapitalize='none'
placeholder='Image link'
placeholderTextColor={'gray'}
onChangeText={handleChange('ImageLink')}
style={style.input}
/>
{/* Control that is any input entered , if false show error products */}
{(errors.ImageLink)&&<Text style={{color:'red',fontSize:18,fontFamily:'sans-serif-condensed'}}>{errors.ImageLink}</Text>}
        </View>
        
        <Text style={{alignSelf:'flex-start',marginLeft:25,marginBottom:15,color:'black',fontSize:15,fontFamily:'KdamThmorPro-Regular'}}>Selected Category: {itemName}</Text>
       <FlatList 
       data={data}
       horizontal={true}
       renderItem={renderCategories}
      />



 
{/* ADD PRODUCT BUTTON */}
<TouchableOpacity
style={style.AddProductButton}
 onPress={handleSubmit}

>
    <Text style={style.AddProductButtonText}>Add Product</Text>
</TouchableOpacity>

</View>
    
)}

  </Formik>

   
  
  
</ScrollView>

    )
}
const style=StyleSheet.create({
    container:{
    
        flex:1
    },
  


  
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



input:{
    width:300,
    height:50, 
    borderRadius:15,
    backgroundColor:'transparent'
    ,borderColor:'black',
    borderWidth:2
},
inputDescription:{
    width:300,
    height:100, 
    borderRadius:15,
    alignSelf:'flex-start',
    backgroundColor:'transparent'
    ,borderColor:'black',
    borderWidth:2
},
forminput:
{
alignItems:'center',
justifyContent:'center',
marginTop:25,
backgroundColor:'transparent'
},

inputContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom:25
},
AddProductButton:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    borderRadius:5,
  
    marginTop:45,
    height:43,
    marginBottom:100,
},

AddProductButtonText:{
color:'white'
,fontSize:15,
marginHorizontal:15,
fontWeight:'700'}

})
export default CreateScreen