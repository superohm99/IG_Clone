import React ,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Inbox } from '@/constants/chat.data'
interface ProfileState {
  username: string;
  name: string;
  avatar: string; //image profile
  post: number;
  follower: number;
  following: number;
  bio: string;
  links: string;
}

interface ChatItemProps {
  data: Inbox;
}

const OtherUserProfileDetailView = ({id}:any) => {
  
  const [isFollow, setIsFollow] = useState(false);
  const [userInfo, setUserinfo] = useState<ProfileState>({
    username: "mark",
    name: "mark zuckerberg",
    avatar: "https://api.time.com/wp-content/uploads/2015/03/mark-zuckerberg-mwc-2015-internet-org-facebook.jpg",
    post: 0,
    follower: 0,
    following: 0,
    bio: "hello mark",
    links: "htttp://facebook",
  })

  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");

  //   const fetchData = async () => {
  //     try{
  //       const response = await axios.get("http://localhost:3001/users/user_info/get", {
  //         headers: {
  //           "Authorization": `Bearer ${token}`,
  //         },
  //       });
  //       const data = response.data;
  //       setProfile({
  //         username: data.user.username,
  //       });
  //           setUserinfo({
  //           ...userInfo,
  //           username: data.user.username,
  //           name: data.name,
  //           avatar: data.avatar,
  //         });
  
  //     } catch (error) {
  //       if ((error as AxiosError).response?.status === 401) {
  //         console.error("Unauthorized, redirecting to login page");
  //         // navigate("/signin", { replace: true });
  //       }
  //       else{
  //         console.error("Failed to fetch user info:", error);
  //       }
  //     }
  //   };
  //   fetchData();

  // }, []);

  const handleFollow = () =>{
    setIsFollow(!isFollow);
    //updateBackend
    console.log("isFollow:",isFollow)
  }

  //back-end search data
  const handleMessage = () =>{
    // router.push({
    //   pathname: `/direct/t/${data.lastMessage.room.roomId}`,
    // });
    
  }

  return (
    <View>
        <View style={styles.profile_container}>
            <View>
              <Image
                  source={userInfo.avatar}
                  style={{
                  resizeMode: 'cover',
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                  }}
              />
              <Text
                  style={{
                  paddingVertical: 5,
                  fontWeight: 'bold',
                  }}>
                  {userInfo.name}
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>{userInfo.post}</Text>
              <Text>Posts</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>{userInfo.follower}</Text>
              <Text>Followers</Text>
            </View>
            <View style={{alignItems: 'center', paddingRight: 30}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>{userInfo.following}</Text>
              <Text>Following</Text>
            </View>
        </View>
        <View style= {styles.profile_detail_container}>
              <Text>
                  {userInfo.bio}
                  {'\n'}
                  {userInfo.links}
              </Text>
        </View>
        <View style={styles.button_container}>
            <TouchableOpacity style= {{width: '49%',}} onPress={handleFollow}>
              
                    <View
                          style={{
                            width: '100%',
                            height: 35,
                            borderRadius: 5,
                            backgroundColor: isFollow ? '#DEDEDE' : '#3493D9',
                            borderWidth: isFollow ? 1 : 0,
                            borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>

                  <Text style={{fontWeight: 'bold',
                                fontSize: 14,
                                letterSpacing: 1,
                                opacity: 0.8,
                                color: isFollow ? 'black' : 'white'}}
                                >
                    {
                      isFollow ? 'Following' : 'Follow'
                    }
                  </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style= {{width: '49%',}} onPress={handleMessage}>
              <View style={styles.button}>
                  <Text style={styles.button_text}>
                    Message
                  </Text>
              </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default OtherUserProfileDetailView

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    header:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileUsername:{
      fontSize: 18,
      fontWeight: 'bold',
    },
    profile_container:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20,
    },
    profile_detail_container:{
      paddingBottom: 10,
    },
    button_container:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 5,
      paddingRight: 5,
    },
    button:{
      width: '100%',
      height: 35,
      borderRadius: 5,
      borderColor: '#DEDEDE',
      backgroundColor: '#DEDEDE',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button_text:{
      fontWeight: 'bold',
      fontSize: 14,
      letterSpacing: 1,
      opacity: 0.8,
    }
})