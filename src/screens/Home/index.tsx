import { Button, Input, Text, InputField } from '@gluestack-ui/themed';
import { AlertBox } from 'components/Alert';
import { WarningModal } from 'components/Dialog';
import { Layout } from 'components/Layout';
import { SelectData } from 'components/SelectData';
import { useState } from 'react';

const infoSelect = [
  {
    label: 'UX Research',
    value: 'ux',
    isDisabled: false,
  },
  {
    label: 'Web Development',
    value: 'web',
    isDisabled: false,
  },
  {
    label: 'UI Designing',
    value: 'ui',
    isDisabled: true,
  },
  {
    label: 'Backend Development',
    value: 'backend',
    isDisabled: false,
  },
];

export function Home() {
  const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  return (
    <Layout>
      <Text size="lg" bold>
        Kit inicial
      </Text>

      <AlertBox
        variant="accent"
        message="Exemplo de mensagem: Atualizamos nossos termos de serviço. Revise e aceite para continuar usando nosso serviço."
      />

      <WarningModal
        show={showAlertDialog}
        setShow={setShowAlertDialog}
        title="Mensagem de alerta"
        message={`Este é um exemplo de um AlertDialog aplicado a um componente. O Valor selecionado é ${selected}`}
        button={{
          title: 'Apagar',
          action: () => console.log(`O valor é: ${selected}`),
        }}
      />

      <Input variant="outline" size="md" w="$full" my="$4">
        <InputField placeholder="Digite o texto..." keyboardType="number-pad" />
      </Input>

      <SelectData data={infoSelect} selectedValue={selected} onChange={setSelected} />

      <Button onPress={() => setShowAlertDialog(true)} my="$4">
        <Text color="$textLight0">Abrir alerta</Text>
      </Button>
    </Layout>
  );
}
