import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, SafeAreaView} from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import { router } from 'expo-router';


export const UserData = [
  {
      id: 1,
      name : 'Elon Musk',
      username : 'muskelon',
      profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
      post : {
          time : '09:00:00',
          date : '01/05/2023',
          image : "https://plus.unsplash.com/premium_photo-1664304582040-4f6c69c8380c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
          caption : 'Hi Everyone, Elon musk is here',
          like : 30,
      }
  },
  {
      id: 2,
      name : 'Harsh Beniwal',
      username : 'harsh',
      profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
      post : {
          time : '04:00 PM',
          date : '08/04/2023',
          image : "https://images.unsplash.com/photo-1715358214370-d6ac2c00aa18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
          caption : 'hi....',
          like : 25,
      }
  },
  {
      id: 3,
      name : 'Modi',
      username : 'nmodi',
      profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
      post : {
          time : '07:00 AM',
          date : '12/05/2023',
          image : "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
          caption : '2000 ke note band',
          like : 99,
      }
  },
  {
      id: 4,
      name : 'Sonam',
      username : 'sonamb12',
      profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
      post : {
          time : '07:00 AM',
          date : '12/05/2023',
          image : "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
          caption : 'carry on jatta',
          like : 88,
      }
  },
  {
    id: 5,
    name : 'Harsh Beniwal',
    username : 'harsh',
    profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
    post : {
        time : '04:00 PM',
        date : '08/04/2023',
        image : "https://images.unsplash.com/photo-1715358214370-d6ac2c00aa18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
        caption : 'hi....',
        like : 25,
    }
},
{
    id: 6,
    name : 'Modi',
    username : 'nmodi',
    profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
    post : {
        time : '07:00 AM',
        date : '12/05/2023',
        image : "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
        caption : '2000 ke note band',
        like : 99,
    }
},
{
    id: 7,
    name : 'Sonam',
    username : 'sonamb12',
    profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
    post : {
        time : '07:00 AM',
        date : '12/05/2023',
        image : "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
        caption : 'carry on jatta',
        like : 88,
    }
},
{
  id: 8,
  name : 'Modi',
  username : 'nmodi',
  profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
  post : {
      time : '07:00 AM',
      date : '12/05/2023',
      image : "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
      caption : '2000 ke note band',
      like : 99,
  }
},
{
  id: 9,
  name : 'Sonam',
  username : 'sonamb12',
  profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
  post : {
      time : '07:00 AM',
      date : '12/05/2023',
      image : "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      caption : 'carry on jatta',
      like : 88,
  }
},
{
  id: 10,
  name : 'Sonam',
  username : 'sonamb12',
  profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
  post : {
      time : '07:00 AM',
      date : '12/05/2023',
      image : "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      caption : 'carry on jatta',
      like : 88,
  }
},
{
  id: 8,
  name : 'Modi',
  username : 'nmodi',
  profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
  post : {
      time : '07:00 AM',
      date : '12/05/2023',
      image : "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
      caption : '2000 ke note band',
      like : 99,
  }
},
{
  id: 9,
  name : 'Sonam',
  username : 'sonamb12',
  profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
  post : {
      time : '07:00 AM',
      date : '12/05/2023',
      image : "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      caption : 'carry on jatta',
      like : 88,
  }
},
{
  id: 10,
  name : 'Sonam',
  username : 'sonamb12',
  profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
  post : {
      time : '07:00 AM',
      date : '12/05/2023',
      image : "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      caption : 'carry on jatta',
      like : 88,
  }
},
{
  id: 11,
  name : 'Modi',
  username : 'nmodi',
  profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
  post : {
      time : '07:00 AM',
      date : '12/05/2023',
      image : "https://images.unsplash.com/photo-1715158310527-2b18420db6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
      caption : '2000 ke note band',
      like : 99,
  }
},
{
  id: 12,
  name : 'Sonam',
  username : 'sonamb12',
  profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
  post : {
      time : '07:00 AM',
      date : '12/05/2023',
      image : "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      caption : 'carry on jatta',
      like : 88,
  }
},
{
  id: 13,
  name : 'Sonam',
  username : 'sonamb12',
  profile : "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
  post : {
      time : '07:00 AM',
      date : '12/05/2023',
      image : "https://images.unsplash.com/photo-1713432924449-c01531ef3821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      caption : 'carry on jatta',
      like : 88,
  }
},
]


const UserProfilePostView = () => {
  const [selected, setSelected] = useState(1)
  console.log(selected)

  const renderItem = (item:any) =>{
    return(
      <TouchableOpacity style={styles.imageContainer} onPress={() => handlePost(item.item.id, item.item.username)}> 
          <Text>{item.item.id,item.item.username}</Text>
          <Image style={styles.image} source={item.item.post.image}/>
      </TouchableOpacity>
    )
  }

  // const handlePost = () => {
  //   router.navigate('/(profile)/UserPost/UserPostScreen')
  // }
  const handlePost = (id: string,username: string) => {
    router.push({pathname:`/(profile)/UserPost/${id}/UserPostScreen`, params: {id,username}})
  };


  return (
    
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.tab_container}>
          <TouchableOpacity
            style={{ width: '33.33%' }}
            onPress={() => setSelected(1)}
          >
            <View style={[styles.tab, selected === 1 && styles.selectedTab]}>
              <FontAwesome6 name="table-cells" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: '33.33%' }}
            onPress={() => setSelected(2)}
          >
            <View style={[styles.tab, selected === 2 && styles.selectedTab]}>
              <Foundation name="play-video" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: '33.33%' }}
            onPress={() => setSelected(3)}
          >
            <View style={[styles.tab, selected === 3 && styles.selectedTab]}>
              <FontAwesome6 name="user-tag" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
  
      </View>
        {selected == 1 && (
          <View style={styles.flatListContainer}>
            <FlatList
                data={UserData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
                showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
        {selected ==2 && (
          <View>
            <Text>Video</Text>
          </View>
        )}
        {selected ==3 && (
          <View>
            <Text>Friend Tags</Text>
          </View>
        )}
    </View>
  )
}

export default UserProfilePostView

const styles = StyleSheet.create({
  mainContainer:{
    // flex: 1,
  },
  container:{
    marginTop: 20,
  },
  tab_container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab:{
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
  },
  image:{
    width: '100%',
    height: 130,
  },
  imageContainer: {
    width: '33.33%', // Adjust width as needed
    height: 'auto',
    marginHorizontal: 1,
  },
  flatListContainer: {
    flex: 1,
  },

})