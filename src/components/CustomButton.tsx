import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

const CustomButton: FC<ButtonProps> = (props) => (
  <Button
    {...props}
    bg="#ffffff"
    borderRadius="8px"
    fontSize="14px"
    lineHeight="24px"
    color="#121212"
    _hover={{
      bg: "rgba(255, 255, 255, 0.92)",
      _disabled: {
        bg: "white.100",
        opacity: "0.45",
      },
    }}
    _disabled={{
      bg: "#ffffff",
      opacity: "0.45",
    }}
  />
);

export default CustomButton;
