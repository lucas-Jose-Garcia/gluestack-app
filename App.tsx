import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config"
import { Home } from 'screens/Home';
import { useColorScheme } from 'react-native';
import { CustomStatusBar } from 'components/CustomStatusBar';

export default function App() {
  let colorScheme = useColorScheme();

  return (
    <GluestackUIProvider colorMode={colorScheme} config={config}>
      <Home />
      <CustomStatusBar />
    </GluestackUIProvider>
  );
}