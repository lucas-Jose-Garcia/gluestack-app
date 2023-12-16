import { Box, useColorMode } from '@gluestack-ui/themed';
import { ComponentProps, ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type BoxProps = ComponentProps<typeof Box>;

interface LayoutProps extends BoxProps {
  children: ReactNode;
}

export function Layout({ children, ...props }: LayoutProps) {
  const colorMode = useColorMode();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        flex={1}
        alignItems="center"
        px="$4"
        sx={{
          bg: colorMode === 'light' ? '$backgroundLight0' : '$backgroundDark900',
        }}
        {...props}>
        {children}
      </Box>
    </SafeAreaView>
  );
}
