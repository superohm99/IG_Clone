import { Stack } from "expo-router";

const NotificationLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NotificationScreen" />
      <Stack.Screen name="FollowRequestScreen" />
    </Stack>
  );
};

export default NotificationLayout;
