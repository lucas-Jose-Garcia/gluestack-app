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
} from "@gluestack-ui/themed"
import { Text } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { CloseIcon } from "@gluestack-ui/themed";
import React, { Dispatch, SetStateAction } from "react";

interface DialogProps {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
}

export function Dialog({show, setShow}: DialogProps) {
    return (
        <AlertDialog
        isOpen={show} 
        onClose={() => setShow(false)}
    >
    <AlertDialogBackdrop />
    <AlertDialogContent>
      <AlertDialogHeader>
        <Heading size="lg">Mensagem de alerta</Heading>
        <AlertDialogCloseButton>
          <Icon as={CloseIcon} />
        </AlertDialogCloseButton>
      </AlertDialogHeader>
      <AlertDialogBody>
        <Text size="sm">
          Este é um exemplo de um AlertDialog padrão, para uso em larga escala, recomenda-se a criação de um componente.
        </Text>
      </AlertDialogBody>
      <AlertDialogFooter>
        <ButtonGroup space="lg">
          <Button
            variant="outline"
            action="secondary"
            onPress={() => {
                setShow(false)
            }}
          >
            <ButtonText>Cancelar</ButtonText>
          </Button>
          <Button
            bg="$error600"
            action="negative"
            onPress={() => {
                setShow(false)
            }}
          >
            <ButtonText>Apagar</ButtonText>
          </Button>
        </ButtonGroup>
      </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
    )
}