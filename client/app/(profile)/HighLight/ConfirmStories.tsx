import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

interface HighLightState{
    name_highlight: string;
    stories: [];
}

const ConfirmStories = () => {
    const handleBack = () => {
        router.navigate("/(profile)/HighLight/ChooseStories");
    }
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [highLight,setHighlightStory] = useState<HighLightState>({
        name_highlight: "",
        stories: [],
    })

    const handleInputChange = (name: keyof HighLightState, value: string) => {
        setHighlightStory({ ...highLight, [name]: value });
      };
    
    const handleSubmit = () => {
        setIsEdit(true);
        router.navigate(`/ProfileScreen?isEdit=true&name_highlight=${highLight.name_highlight}`);
    };
    
    return (
    <View style={styles.main_container}>
        <SafeAreaView style={styles.topnav}>
                <FontAwesome6 name="arrow-left" size={22} onPress={handleBack} />
                <Pressable onPress={handleBack} style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }} numberOfLines={1} ellipsizeMode="tail">Title</Text>
                </Pressable>
                <Pressable style={styles.leftnav} onPress={handleSubmit}>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: "bold", color: '#19B2FF' }} numberOfLines={1} ellipsizeMode="tail">Add</Text>
                    </View>
                </Pressable>
        </SafeAreaView>
        <View style={styles.content_container}>
            <Image
                source="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
                style={{
                resizeMode: 'cover',
                width: 150,
                height: 150,
                borderRadius: 100,
                }}
            />
            <Pressable>
                <Text style={{color: '#19B2FF',paddingTop:15,fontSize:18, paddingBottom: 20}}>Edit cover</Text>
            </Pressable>
            <TextInput
                placeholder='Highlights'
                value={highLight.name_highlight}
                onChangeText={(value) => handleInputChange('name_highlight', value)}
                style={{
                    fontSize: 20,
                    color: "#000000",
                    textAlign: 'center',
                }}
            />
        </View>
    </View>
  )
}

export default ConfirmStories

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
    },
    topnav: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "white",
        gap: 28,
    },
    leftnav: {
        marginLeft: 'auto',
    },
    content_container:{
        flex: 1,
        // justifyContent: 'center',
        marginTop: 100,
        alignContent: 'center',
        alignItems: 'center',
    }

})