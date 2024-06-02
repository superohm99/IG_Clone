import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import { router } from 'expo-router'
import { Feather } from '@expo/vector-icons'

interface EditState {
  username: string;
  name: string;
  avatar: string; //image profile
  bio: string; //description
  links: string;
}
interface UpdateState {
  username: string;
  name: string;
  avatar: string; //image profile
  bio: string; //description
  links: string;
}

const EditProfileScreen = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [userInfo, setUserinfo] = useState<EditState>({
    username: "",
    name: "",
    avatar: "https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg",
    bio: "",
    links: "",
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
  //           setUserinfo({
  //           ...userInfo,
  //           username: data.user.username,
  //           name: data.name,
  //           avatar: data.avatar,
  //           bio: data.bio,
  //           links: data.links
  //         });
  //     } catch (error) {
  //       if ((error as AxiosError).response?.status === 401) {
  //         console.error("Unauthorized, redirecting to login page");
  //         navigate("/signin", { replace: true });
  //       }
  //       else{
  //         console.error("Failed to fetch user info:", error);
  //       }
  //     }
  //   };
  //   fetchData();

  // }, []);

  const updateUserInfo = async (updatedData: Partial<UpdateState>) => {
    const token = localStorage.getItem("access_token")
    try {
      const response = await fetch("http://localhost:3001/users/user_info/update_info", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
          body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      if (response.ok) {
        //
      } else {
        console.error("Failed to update user info:", data);
      }
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUserinfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsEdit(true);
  };

  useEffect(() => {
    if (isEdit) {
    updateUserInfo({
      username: userInfo.username,
      name: userInfo.name,
      avatar: userInfo.avatar,
      bio: userInfo.bio,
      links: userInfo.links
    });
    setUserinfo({...userInfo,});
    console.log('User_info update:',userInfo);
    }

    return () => {
      setIsEdit(false);
    };

  }, [isEdit]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate('/ProfileScreen')}>
          <Feather name="arrow-left" style={{fontSize: 20}} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: 'bold', paddingLeft: 10}}>Edit Profile</Text>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={userInfo.avatar}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <TouchableOpacity>
          <Text style={{color: '#3493D9',}}>
            Edit profile picture
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profile_detail_container}>
        <View>
          <Text style={{opacity: 0.5, }}>Name</Text>
          <TextInput
            placeholder="name"
            defaultValue=""
            onChange={handleInputChange}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity: 0.5,}}>Username</Text>
          <TextInput
            placeholder="accountname"
            defaultValue=""
            onChange={handleInputChange}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity: 0.5,}}>Bio</Text>
          <TextInput
            placeholder="Bio"
            defaultValue=""
            onChange={handleInputChange}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity: 0.5,}}>Links</Text>
          <TextInput
            placeholder="Add links"
            defaultValue=""
            onChange={handleInputChange}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity: 0.5,}}>Music</Text>
          <TextInput
            placeholder="Add musics to your profile"
            defaultValue=""
            onChange={handleInputChange}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Switch to Professional account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Persnol information setting
        </Text>
      </View>
      <View style={styles.button_container}>
          <TouchableOpacity style={{width: '100%'}} onPress={handleSubmit}>
            <View style={styles.button}>
                <Text style={styles.button_text}>
                  Save Changes
                </Text>
             </View>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor: 'white', 
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profile_detail_container:{
    padding: 10
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
    backgroundColor: '#0080FF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text:{
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 1,
    opacity: 0.8,
  }
})