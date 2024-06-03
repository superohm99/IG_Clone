import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'

const OtherUserProfileHighlightStory = ({id}:any) => {
  const [highlight_stories, setHighlightStory] = useState([]);
  const { isEdit, cover_image,name_highlight } = useLocalSearchParams();

  useEffect(() => {
    // Fetch highlight stories from the backend API
    const fetchHighlightStories = async () => {
      try {
        const response = await fetch(`https://your-backend-api.com/highlights/${id}`);
        const data = await response.json();
        setHighlightStory(data);
      } catch (error) {
        console.error('Error fetching highlight stories:', error);
      }
    };

    fetchHighlightStories();
  }, [id]);

  return (
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{paddingVertical: 5,}}>
        {highlight_stories.length >0 ? (
        highlight_stories.map(story => (
        <View key={story.id} style={styles.container}>
          
            <View>
              <TouchableOpacity>
                  <Image
                    source={story.cover}
                    style={styles.image}
                  />
                  {/* <View style={styles.highlight_circle}></View> */}
              </TouchableOpacity>
                  <Text style={styles.highlight_circle_name}>{story.name}</Text>
            </View>          
        </View>
         ))    
      ) :(
        <View></View>
      )}
    </ScrollView>
  )
}

export default OtherUserProfileHighlightStory

const styles = StyleSheet.create({
  container:{
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  new_circle:{
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight_circle:{
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'black',
    opacity: 0.1,
    marginHorizontal: 5,
  },
  highlight_circle_name:{
    color: '#000000',   
    textAlign: 'center',
  },
  image:{
    resizeMode: 'cover',
    width: 60,
    height: 60,
    borderRadius: 100,
    marginHorizontal: 5,
  }
})