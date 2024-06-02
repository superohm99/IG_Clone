import React ,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
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


const UserProfileDetailView = () => {
 

  const [userInfo, setUserinfo] = useState<ProfileState>({
    username: "Teeruth",
    name: "teeruth",
    avatar: "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
    post: 0,
    follower: 0,
    following: 0,
    bio: "hello haojogjageokofeo",
    links: "htttp://aaa",
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


  return (
    <View>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.profileUsername}>
                    {userInfo.username}
                </Text>
                <Feather
                name="chevron-down"
                style={{
                    fontSize: 20,
                    color: 'black',
                    paddingHorizontal: 5,
                    opacity: 0.5,
                }}
                />
            </View>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingRight:5}}>
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 15,
              }}
            />
            <Feather
              name="menu"
              style={{
                fontSize: 25,
              }}
            />
          </View>
        </View>
        <View style={styles.profile_container}>
            <View style={styles.profile_detail_container}>
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
        <View style= {{paddingBottom: 10}}>
              <Text>
                  {userInfo.bio}
                  {'\n'}
                  {userInfo.links}
              </Text>
        </View>
        <View style={styles.button_container}>
            <TouchableOpacity style= {{width: '50%',}} onPress={() => router.push('/(profile)/EditProfileScreen')}>
              <View style={styles.button}>
                  <Text style={styles.button_text}>
                    Edit Profile
                  </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style= {{width: '50%',}}>
              <View style={styles.button}>
                  <Text style={styles.button_text}>
                    Share Profile
                  </Text>
              </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default UserProfileDetailView

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
        alignItems: 'center',
    },
    button_container:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingVertical: 5,
    },
    button:{
      width: '100%',
      height: 35,
      borderRadius: 5,
      borderColor: '#DEDEDE',
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