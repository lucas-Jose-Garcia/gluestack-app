import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
  Heading,
  ButtonGroup,
  ButtonText,
  Button,
  Text,
  Icon,
  CloseIcon,
} from '@gluestack-ui/themed';
import React, { Dispatch, SetStateAction } from 'react';

interface WarningModalProps {
  title: string;
  message: string;
  button: buttonProps;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

interface buttonProps {
  title: string;
  type?: 'primary' | 'secondary' | 'positive' | 'negative' | 'default';
  action: () => void;
}

export function WarningModal({ title, message, button, show, setShow }: WarningModalProps) {
  return (
    <AlertDialog isOpen={show} onClose={() => setShow(false)}>
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading size="lg">{title}</Heading>
          <AlertDialogCloseButton>
            <Icon as={CloseIcon} />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text size="sm">{message}</Text>
        </AlertDialogBody>
        <AlertDialogFooter>
          <ButtonGroup space="lg">
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShow(false);
              }}>
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button
              bg="$error600"
              action={button.type ?? 'default'}
              onPress={() => {
                button.action();
                setShow(false);
              }}>
              <ButtonText>{button.title}</ButtonText>
            </Button>
          </ButtonGroup>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
