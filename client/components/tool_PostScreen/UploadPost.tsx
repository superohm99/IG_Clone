import React, {useState, useEffect} from 'react'
import { Button, Image, View, StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from 'expo-router';
import { useNavigation } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';


const UploadPost = () => {
    const navigation = useNavigation();

    const [images, setImages] = useState([]);

    

    const pickImages = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        selectionLimit: 5, // Allow selecting up to 5 images
      });
  
      console.log('ImagePicker result:', result);
  
      if (!result.canceled) {
        setImages(result.assets.map((asset) => asset.uri));
        console.log('Selected images:', result.assets.map((asset) => asset.uri));
      }
    };
    

    const fetchBlob = async (uri:any) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        return blob;
      };
    
    const uploadImages = async () => {
        const formData = new FormData();
    
        for (const [index, uri] of images.entries()) {
          const blob = await fetchBlob(uri);
          formData.append('images', blob, `image_${index}.jpg`);
        }
    
        try {
          const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: formData,
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const responseData = await response.json();
          console.log('Upload successful', responseData);
        } catch (error) {
          console.error('Error uploading images', error);
        }
      };



    // Clear image selection when navigating back
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
        setImages([]);
        });

    return unsubscribe;
  }, [navigation]);
    
    return (
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <View style={styles.topHeaderWrapper}>
                    <View style={styles.headerTopLeftWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon size={30} name="times" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Create new post</Text>
                    </View>
                </View>
            </View>  
            <View style={styles.content_middle}>
            </View>
        </View>
            <View style={styles.upload_container}>
                <Icon size={100} name="upload"/>
                <Text style={styles.upload_title}>Drag photos and videos here</Text>
                <Button title="Pick an image from camera roll" onPress={pickImages} />
                <ScrollView horizontal>

                {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
                {images.map((imageUri, index) => (
                <Image key={index} source={{ uri: imageUri }} style={styles.image} />
              ))}
                </ScrollView>
                {/* <Button title="Upload images" onPress={uploadImages} /> */}


            </View>
    </SafeAreaView>
    );
}

export default UploadPost

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: 200,
      height: 200,
    },
    headerWrapper: {
        display: 'flex',
    },
    topHeaderWrapper: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    headerTopLeftWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: '900',
        fontSize: 30,
        paddingLeft:50,
    },
    upload_container:{
        display: 'flex',
        alignContent:'center',
        alignItems:'center',
        justifyContent: 'center',
        padding:100
    },
    content_middle:{
        borderTopColor: 'grey',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    upload_title:{
        fontSize:20,
        padding: 10,
    }

});