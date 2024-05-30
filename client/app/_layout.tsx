import { Stack } from "expo-router"
import TopNavChat from "@/components/Direct/TopNavChat"
import ChatHeader from "@/components/Direct/ChatHeader"
const RootLayout = () => {
    return (
        <Stack>
                <Stack.Screen name='index' 
                        options={{ headerShown: false,}} />
                <Stack.Screen name='(tabs)' 
                    options={{
                        headerShown: false,
                        statusBarStyle: 'dark',
                        }} />
                <Stack.Screen name='direct/inbox' 
                    options={{
                        animation: 'slide_from_right', 
                        animationDuration: 100,
                        header: () => <TopNavChat username="ppondeutrx" />,
                        statusBarStyle: 'dark',
                        }} />
                <Stack.Screen name='direct/t/[id]/index' 
                    options={{ animation: 'slide_from_right', 
                        animationDuration: 100,
                        headerShown: false,
                        statusBarStyle: 'dark',
                        }} />
                <Stack.Screen name='direct/t/[id]/messageSetting'
                    options={{ animation: 'slide_from_right', 
                        animationDuration: 100,
                        headerTitle: '',
                        statusBarStyle: 'dark',
                        headerShadowVisible: false,
                        }} />
                <Stack.Screen name='direct/t/[id]/profile'
                    options={{ animation: 'slide_from_right', 
                        animationDuration: 100,
                        headerTitle: '',
                        statusBarStyle: 'dark',
                        headerShadowVisible: false,
                        }} />
                
        </Stack>
    )
}

export default RootLayout