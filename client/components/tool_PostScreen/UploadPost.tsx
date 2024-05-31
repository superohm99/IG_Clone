import React, {useState, useEffect} from 'react'
import { Button, Image, View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from 'expo-router';
import { useNavigation } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const UploadPost = () => {
    const navigation = useNavigation();

    const [images, setImages] = useState([]);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          selectionLimit: 5, // Allow selecting up to 5 images
        });
    
        console.log(result);
    
        if (!result.canceled) {
        //   setImages(result.assets[0].uri);
            // Handle multiple images
            setImages(result.assets.map((asset) => asset.uri));
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
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
                {images.map((imageUri, index) => (
                <Image key={index} source={{ uri: imageUri }} style={styles.image} />
              ))}
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