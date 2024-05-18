import React,{ useState, useEffect } from 'react'
import { View, Text, Image, TextInput, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, router } from "expo-router";

const API_ENDPOINT = "https://randomuser.me/api/?results=30";

const SearchUsers = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() =>{
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, []);

  const fetchData = async(url:any)=>{
    try{
      const response = await fetch(url);
      const json =  await response.json();
      setData(json.results);
      console.log(json.results);
      setFullData(json.results); // Save full data
      setIsLoading(false);
    }
    catch(error:any){
      setError(error);
      console.log(error);
      setIsLoading(false);
    }

  }

  const handleSearchQuery = (query:any) =>{
    setSearchQuery(query);
    if (query) {
      const filteredData = fullData.filter((item:any) => 
        item.login.username.toLowerCase().includes(query.toLowerCase()) || 
        item.name.first.toLowerCase().includes(query.toLowerCase())
      );
      setData(filteredData);
    } else {
      setData(fullData); // Reset to full data when query is empty
    }
  }

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size={"large"} color="#5500dc"/>
      </View>
    );
  }
  if(error){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Error in fethcing data</Text>
      </View>
    );
  }

  const sendUserID = (id: string,username: string) =>{
    router.push({pathname:"/SearchScreen", params: {id,username}})
    console.log('uuid:',id)
    console.log('username:',username)
  };
  

  return (
    <SafeAreaView style={styles.safe_area}>
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.topHeaderWrapper}>
          <View style={styles.headerTopLeftWrapper}>
            <TouchableOpacity onPress={() => router.push('/SearchScreen')}>
              <Icon size={25} name="arrow-left" />
            </TouchableOpacity>
            <View style={styles.search_box}>
                <Icon name="search" size={15}/>
                <TextInput
                placeholder="Search"
                style={styles.search_content}
                autoCapitalize='none'
                autoCorrect={false}
                value={searchQuery}
                onChangeText={(query) => handleSearchQuery(query)}
                />
            </View>
          </View>
        </View>
      </View>
    </View>
    <ScrollView style={styles.scrollView}>
      <View style={styles.content_middle}>
      <Text style={{fontSize:18, fontWeight: 'bold'}}>
        Recent</Text>
      <Text style={{fontSize:16, color:'#00b7eb',fontWeight: 'bold'}}>
        See all</Text>
      </View>
      <FlatList
        data = {data}
        keyExtractor={(item:any) => item.login.username}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.login.username}
            // onPress={() => console.log(item.login.uuid,item.login.username,item.name.first,)}
            onPress={() => sendUserID(item.login.uuid,item.login.username)}
          >
          <View style={styles.itemContainer}>
            <Image source={{uri: item.picture.thumbnail}} style={styles.image}/>
            <View>
              <Text style={styles.textUserName}>{item.login.username}</Text>
              <Text style={styles.textName}>{item.name.first}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
    </SafeAreaView>
  );
};

export default SearchUsers

const styles = StyleSheet.create({
    safe_area:{
        flex: 1,
      },
    container: {
        display: 'flex',
    },
    headerWrapper: {
        display: 'flex',
        paddingBottom: 15
    },
    topHeaderWrapper: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // padding: 10,
    },
    headerTopLeftWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    search_content:{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#ccc",
    },
    search_box:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 70,
        paddingVertical: 2,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 10,
        paddingLeft: 10
    },
    content_middle:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:20,
        paddingTop: 12,
        borderTopColor: 'grey',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    itemContainer:{
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 10,
      marginTop: 10,
    },
    textUserName:{
      fontSize: 17,
      marginLeft: 10,
      fontWeight: "600",
    },
    textName:{
      fontSize: 14,
      marginLeft: 10,
    },
    scrollView: {
      backgroundColor: 'white',
    },

});