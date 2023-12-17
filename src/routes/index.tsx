import { useColorMode, useToken } from '@gluestack-style/react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from 'screens/Home';
import { SecondPage } from 'screens/SecondPage';

const Stack = createStackNavigator();

export function Routes() {
  const colorMode = useColorMode();
  const bgColor = useToken(
    'colors',
    colorMode === 'light' ? 'backgroundLight0' : 'backgroundDark900',
  );

  const titleColor = useToken('colors', colorMode === 'light' ? 'textDark900' : 'textLight0');

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: bgColor,
          },
          headerTitleStyle: {
            color: titleColor,
          },
        }}
      />
      <Stack.Screen name="SecondPage" component={SecondPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
