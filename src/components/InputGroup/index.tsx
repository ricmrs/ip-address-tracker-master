import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import { ThemeTypographyVariants } from "@/theme/theme";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Input from "../Input";
import React from "react";
import Text from "../Text/Text";

interface InputGroupProps {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onEnterPressed?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  buttonStyle?: StyleSheet;
  inputStyle?: StyleSheet;
  inputVariant?: ThemeTypographyVariants;
  inputValidity?: Boolean;
}

const InputGroup = React.forwardRef(({
  value,
  placeholder,
  onChange,
  onClick,
  onEnterPressed,
  children,
  buttonStyle,
  inputStyle,
  inputVariant,
  inputValidity
}: InputGroupProps, ref) => {
  return (
    <BaseComponent styleSheet={{
      flexDirection: 'column',
      gap: '10px'
    }}>
      <Box styleSheet={{
        flexDirection: 'row',
        minHeight: '60px',
        minWidth: { xs: '100%', lg: '450px' }
      }}>
        <Input
          value={value}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          onEnterPressed={onEnterPressed}
          variant={inputVariant}
          styleSheet={{ flexGrow: '1', ...inputStyle }} />
        <Box>
          <Button
            onClick={onClick}
            styleSheet={{ height: '100%', ...buttonStyle }}
          >
            {children}
          </Button>
        </Box>
      </Box>
      {!inputValidity && 
        <Text 
          variant="heading4" 
          tag="span" 
          styleSheet={{ 
            color: 'red', 
            paddingLeft: '15px',
            paddingVertical: '5px', 
            backgroundColor: 'rgba(231, 198, 198, 0.8)',
            borderRadius: '5px'
          }}
        >
          Invalid IP
        </Text>}
    </BaseComponent>
  )
})

InputGroup.displayName = 'InputGroup';

InputGroup.defaultProps = {
  inputValidity: true
}

export default InputGroup;
