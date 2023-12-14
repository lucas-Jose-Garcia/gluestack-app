import { Button, Text } from '@gluestack-ui/themed';
import { AlertBox } from 'components/Alert';
import { WarningModal } from 'components/Dialog';
import { Layout } from 'components/Layout';
import { useState } from 'react';

export function Home() {
  const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);
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
    </Layout>
  );
}
