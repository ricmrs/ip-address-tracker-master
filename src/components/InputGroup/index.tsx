import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import { ThemeTypographyVariants } from "@/theme/theme";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Input from "../Input";

interface InputGroupProps {
  value?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void)
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  buttonStyle?: StyleSheet;
  inputStyle?: StyleSheet;
  inputVariant?: ThemeTypographyVariants;
} 

export default function InputGroup({ value, onChange, onClick, children, buttonStyle, inputStyle, inputVariant }: InputGroupProps){
  return (
    <BaseComponent styleSheet={{
      flexDirection: 'row',
    }}>
      <Input
        value={value}
        onChange={onChange}
        variant={inputVariant} 
        styleSheet={{ flexGrow: '1', ...inputStyle }}/>
      <Box>
        <Button
          onClick={onClick} 
          styleSheet={{ height: '100%', ...buttonStyle }}
        >
          {children}
        </Button>
      </Box>
    </BaseComponent>
  )
}