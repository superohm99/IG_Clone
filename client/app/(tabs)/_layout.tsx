import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Tabs, Redirect } from 'expo-router'



const TabsLayout = () => {
  return (
    <>
        <Tabs>
          <Tabs.Screen
            name="HomeScreen"
            options={{
              title: "Home",
              headerShown: false,
              // tabBarIcon: ({ color, focused }) => (
              //   <TabIcon
              //     icon={icons.home}
              //     color={color}
              //     name="Home"
              //     focused={focused}
              //   />
              // ),
            }}
          />
           
        </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})