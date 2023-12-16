import {
  Icon,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectIcon,
  Select,
  SelectInput,
  SelectPortal,
  SelectTrigger,
  Box,
  ChevronDownIcon,
  SelectDragIndicator,
  SelectItem,
} from '@gluestack-ui/themed';

interface infoSelectProps {
  label: string;
  value?: string;
  isDisabled?: boolean;
}

interface SelectDataProps {
  data: infoSelectProps[];
  selectedValue: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export function SelectData({ data, selectedValue, onChange }: SelectDataProps) {
  return (
    <Select w="$full" selectedValue={selectedValue} onValueChange={onChange}>
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Selecione" />
        <Box mr="$3">
          <SelectIcon>
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </Box>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {data.map((item) => (
            <SelectItem
              key={item.label}
              label={item.label}
              value={item.value ?? item.label}
              isDisabled={item.isDisabled ?? false}
            />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
