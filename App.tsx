import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { CustomStatusBar } from 'components/CustomStatusBar';
import { useColorScheme } from 'react-native';
import { Routes } from 'routes';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider colorMode={colorScheme} config={config}>
      <NavigationContainer>
        <Routes />
        <CustomStatusBar />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
