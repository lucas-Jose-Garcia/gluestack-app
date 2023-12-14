import {
  EyeOffIcon,
  EyeIcon,
  Heading,
  VStack,
  InputSlot,
  Button,
  Input,
  Text,
  InputField,
  InputIcon,
  FormControl,
  ButtonText,
} from '@gluestack-ui/themed';
import { AlertBox } from 'components/Alert';
import { WarningModal } from 'components/Dialog';
import { Layout } from 'components/Layout';
import { useState } from 'react';

export function Home() {
  const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  return (
    <Layout>
      <Text size="lg" bold>
        Kit inicial
      </Text>

      <AlertBox
        variant="accent"
        message="Exemplo de mensagem: Atualizamos nossos termos de serviço. Revise e aceite para continuar usando nosso serviço."
      />

      <Button onPress={() => setShowAlertDialog(true)} m="$4">
        <Text color="$textLight0">Abrir alerta</Text>
      </Button>

      <WarningModal
        show={showAlertDialog}
        setShow={setShowAlertDialog}
        title="Mensagem de alerta"
        message="Este é um exemplo de um AlertDialog aplicado a um componente."
        button={{
          title: 'Apagar',
          action: () => setShowAlertDialog(false),
        }}
      />

      <Input variant="outline" size="md" m="$4">
        <InputField placeholder="Digite o texto..." keyboardType="number-pad" />
      </Input>

      <FormControl
        p="$4"
        borderWidth="$1"
        borderRadius="$lg"
        borderColor="$borderLight300"
        sx={{
          _dark: {
            borderWidth: '$1',
            borderRadius: '$lg',
            borderColor: '$borderDark800',
          },
        }}>
        <VStack w="$72" space="xl">
          <Heading lineHeight="$md">Login</Heading>
          <VStack space="xs">
            <Text lineHeight="$xs">Email</Text>
            <Input>
              <InputField type="text" />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text lineHeight="$xs">Password</Text>
            <Input>
              <InputField type={showPassword ? 'text' : 'password'} />
              <InputSlot pr="$3" onPress={handleState}>
                {showPassword ? (
                  <InputIcon as={EyeIcon} color="$darkBlue500" />
                ) : (
                  <InputIcon as={EyeOffIcon} color="$darkBlue500" />
                )}
              </InputSlot>
            </Input>
          </VStack>
          <Button
            ml="auto"
            onPress={() => {
              console.log('Press');
            }}>
            <ButtonText color="$white">Save</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    </Layout>
  );
}
