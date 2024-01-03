import { useColorMode, useToken } from '@gluestack-style/react';
import { StatusBar } from 'expo-status-bar';

export function CustomStatusBar() {
  const colorMode = useColorMode();
  const backgroundColor = useToken(
    'colors',
    colorMode === 'light' ? 'backgroundLight0' : 'backgroundDark900',
  );

  return <StatusBar backgroundColor={backgroundColor} />;
}
