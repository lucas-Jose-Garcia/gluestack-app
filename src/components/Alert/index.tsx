import { AlertIcon, AlertText, InfoIcon, Alert } from '@gluestack-ui/themed';

interface AlertBoxProps {
  variant: 'solid' | 'outline' | 'accent';
  message: string;
}

export function AlertBox({ variant, message }: AlertBoxProps) {
  return (
    <Alert mx="$2.5" m="$4" action="info" variant={variant}>
      <AlertIcon as={InfoIcon} mr="$3" />
      <AlertText>{message}</AlertText>
    </Alert>
  );
}
