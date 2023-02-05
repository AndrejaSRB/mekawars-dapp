import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import type { FC } from "react";

interface CustomNumberFieldProps {
  defaultValue: number;
  min: number;
  max: number;
  onChange: (_: any, valueAsNumber: number) => void;
  value: number;
}

const CustomNumberField: FC<CustomNumberFieldProps> = ({
  defaultValue,
  min,
  max,
  onChange,
  value,
}) => (
  <NumberInput
    defaultValue={defaultValue}
    min={min}
    max={max}
    value={value}
    onChange={onChange}
  >
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);

export default CustomNumberField;
