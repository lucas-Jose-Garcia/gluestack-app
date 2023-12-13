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
import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface WarningModalProps {
    title: string
    message: string
    button: buttonProps
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
}

interface buttonProps {
  title: string
  action: () => void
}

export function WarningModal({title, message, button, show, setShow}: WarningModalProps) {
    return (
        <AlertDialog
        isOpen={show} 
        onClose={() => setShow(false)}
    >
    <AlertDialogBackdrop />
    <AlertDialogContent>
      <AlertDialogHeader>
        <Heading size="lg">{title}</Heading>
        <AlertDialogCloseButton>
          <Icon as={CloseIcon} />
        </AlertDialogCloseButton>
      </AlertDialogHeader>
      <AlertDialogBody>
        <Text size="sm">
          {message}
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
            onPress={() => button.action()}
          >
            <ButtonText>{button.title}</ButtonText>
          </Button>
        </ButtonGroup>
      </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
    )
}