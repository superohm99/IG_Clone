import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import { Tabs } from 'expo-router'
import { icons } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";


interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}


const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }}
      />
    </View>
  );
};

export function HeaderLayout() {
  const handlePressInbox = () => {
    router.push('/direct/inbox')
  }
  const handlePressHeart = () => {
    // router.push('/direct/heart')
  }
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, gap: 16, backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Instagram</Text>
        <Pressable style={{ marginLeft: 'auto' }} onPress={handlePressHeart}>
          <Ionicons name="heart-outline" size={28} color="black" />
        </Pressable>
        <Pressable onPress={handlePressInbox}>
          <Feather name="message-circle" size={28} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}


export function TabsLayout() {
  return (
    <>
      <Tabs screenOptions={{ tabBarShowLabel: false }}>
        <Tabs.Screen
          name="HomeScreen" 
          options={{
            title: "",
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
            header: () => <HeaderLayout />,
          }}
        />


        <Tabs.Screen
          name="SearchScreen"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.search}
                color={color}
                name="Search"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="PostScreen"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Post"
                focused={focused}
              />
            ),
          }}
        />


        <Tabs.Screen
          name="ClipScreen"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.clip}
                color={color}
                name="Clip"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="ProfileScreen"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />




      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})