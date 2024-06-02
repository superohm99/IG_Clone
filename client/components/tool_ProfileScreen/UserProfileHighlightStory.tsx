import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'

const UserProfileHighlightStory = () => {
  const [highlight_stories, setHighlightStory] = useState([{ id: 0, name: "",isNew: true }])
  const { isEdit, name_highlight } = useLocalSearchParams();

  useEffect(() => {
    if (isEdit) {
        addHighlightStory(name_highlight as string);
        // Clear the isEdit and name_highlight parameters
        router.replace('/ProfileScreen');
    }
}, [isEdit, name_highlight]);


  const addHighlightStory = (name_highlight:string) => {
    if (name_highlight == "")
      {
        name_highlight = "Highlights"
      }
    setHighlightStory([...highlight_stories, { id: highlight_stories.length, name: name_highlight,isNew: false }])
  }
  
  return (
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 5,
        }}>
        {highlight_stories.map(story => (
        <View key={story.id} style={styles.container}>
          {story.isNew ? (
            <TouchableOpacity onPress={() => router.push("/(profile)/HighLight/ChooseStories")}>
              <View style={styles.new_circle}>
                <Entypo name="plus" style={{ fontSize: 40, color: 'black' }} />
              </View>
              <Text>New</Text>
            </TouchableOpacity>
          ) : (
            <View>
              <TouchableOpacity>
                  <Image
                    source="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
                    style={styles.image}
                  />
                  {/* <View style={styles.highlight_circle}></View> */}
              </TouchableOpacity>
                  <Text style={styles.highlight_circle_name}>{story.name}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  )
}

export default UserProfileHighlightStory

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
    opacity: 0.1,
    marginHorizontal: 5,
  }
})