import { Stack } from 'expo-router';

import 'react-native-reanimated';

export default function RootLayout() {


  return (
      <Stack>
        <Stack.Screen name="/"/>
        <Stack.Screen name="/signup"/>
        <Stack.Screen name='/verification' />
        <Stack.Screen name='/forgotPassword' />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
