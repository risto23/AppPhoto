/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,  { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Linking,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Button, Alert,Image,
  Dimensions,
  BackHandler,
  Modal
} from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from '../css/CSS_all';
// import {Header,Left,Right,Body} from 'native-base';
// import { faBook, faDoorOpen, faHome, faMailBulk, faPen, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { CommonActions } from '@react-navigation/native';
import { Card } from "@rneui/base";
import Lightbox from 'react-native-lightbox-v2';
import ImageModal from 'react-native-image-modal';

// import DeviceInfo from 'react-native-device-info';
// import { Provider, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import messaging from '@react-native-firebase/messaging';




export default  main_program=({route, navigation})=>{

  const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 1/2);
const imageWidth = dimensions.width;
const logoWidth = Math.round(dimensions.width * 9 / 16);
  const [isLoading, setisLoading]     = useState(false);

  let [json_view_data, setjson_view_data]       =useState([]);
  let [loading_history, setloading_history] = useState(false);
  let [show_modal, setshow_modal] = useState(false);
  let [gambar, setgambar] = useState("");
  let [halaman, sethalaman] = useState("1");
  let [show_halaman, setshow_halaman] = useState("");
  let [start_page, setstart_page] = useState(0);
    let [end_page, setend_page] = useState(10);
  
  

  get_data =()=>
  {

     // console.log("bbbb");
     axios.get('https://api.unsplash.com/photos?client_id=N1Pmr9jpX9eyvvvlPFOm84PabdJczXjGxeIvhEaFfn4&page='+halaman)
    .then(function (responseJson) {
      console.log(responseJson.data);
      if (responseJson.status == 200)
      {
        setjson_view_data(responseJson.data);
      }

      
    })
  }
//   modal_show = () => {
//     return(
        
//     )
    
//   }

load_more = async() =>
{
  
}

  useEffect(async() =>
    {
      // await set_tanggal();
      get_data();
    //   api_list_search_1();
    }, [])
  
    show_data = () => 
    {
        return json_view_data.map((item) =>{
            return(
                <ScrollView>
                    <Card containerStyle={{width: "100%", marginLeft: 0, backgroundColor : 'white'}} wrapperStyle={{}}>
                        <View>
                            <Card containerStyle={{width: "100%", marginLeft: 0, backgroundColor : 'white'}} wrapperStyle={{}}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:1}}>
                                            <Lightbox style={{flex:1, alignItems: 'center'}}>
                                            
                                                    <Image
                                                    style={{
                                                        width: imageWidth,
                                                        height: imageHeight,
                                                        flex: 1
                                                    }}
                                                        source={{
                                                            uri: item.urls.thumb
                                                        }}
                                                        resizeMode= "contain"
                                                    />

                                            
                                            
                                            </Lightbox>

                                            
                                           
                                        </View>
                                        <View style={{flex:1,flexDirection:'column'}}>
                                            <View style={{flex:1,flexDirection:'row'}}>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>Title</Text>
                                                </View>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>: {item.alt_description}</Text>
                                                </View>
                                            </View>
                                            <View style={{flex:1,flexDirection:'row'}}>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>Author</Text>
                                                </View>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>: {item.user.name}</Text>
                                                </View>
                                            </View>
                                            <View style={{flex:1,flexDirection:'row'}}>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>Description</Text>
                                                </View>
                                                <View style={{flex:1}}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 ,color:'#000000',}}>: {item.description}</Text>
                                                </View>
                                            </View>
                                            
                                            
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </Card>
                    
                </ScrollView>
                
                
            )
        }) 
    }

  return (
    <View>
        <View style={{marginBottom: 0, backgroundColor:'white'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1, flexDirection: 'row'}}>
                    
                    <View style={{flex:1,marginTop:5}}>
                        <TextInput
                            value={show_halaman}
                            // maxLength={2}
                            keyboardType="numeric"
                            style={{borderBottomColor: '#000000',
                            borderBottomWidth : 1,color: 'black',fontSize:12,borderWidth:1,width:'80%',marginLeft:10}}
                            // editable = {edit_alamat_baru}
                            onChangeText={(text)=>{
                                setshow_halaman(text);
                            }}
                            // maxLength={40}
                        />
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity
                        style={{backgroundColor: '#2196F3',width:'80%',borderRadius: 20,marginTop:10,height:40}}
                        onPress={async() =>{
                            await sethalaman(show_halaman)
                            await get_data();
                            await setshow_halaman("")
                        }}>
                        <Text style={{color: 'white',fontWeight: 'bold',textAlign: 'center',marginTop: 5}}>Go</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={{flex:1,marginLeft: 5}}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 5 ,color:'#000000', flex: 1}}>Page :{halaman}</Text>
                </View>
            </View>
        </View>
        <ScrollView>
            {show_data()}
            
            
        </ScrollView>
        
    </View>
    );


   
}
