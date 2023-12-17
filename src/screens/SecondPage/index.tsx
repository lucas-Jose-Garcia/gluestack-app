import { Button, Center, Text, VStack } from '@gluestack-ui/themed';
import { Layout } from 'components/Layout';

export function SecondPage({ navigation }) {
  return (
    <Layout>
      <Text size="xl">Segunda Página</Text>
      <Center flex={1}>
        <VStack>
          <Button action="positive" onPress={() => navigation.goBack()}>
            <Text>Voltar a tela inicial</Text>
          </Button>
        </VStack>
      </Center>
    </Layout>
  );
}
