import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import { ThemeTypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";

interface InputProps {
  type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime' | 'email' | 'file' | 'image' | 'number' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'url' ;
  value?: string;
  placeholder?: string;
  variant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, value, children, variant, styleSheet, onChange, ...props }: InputProps){
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant!];
  return (
    <BaseComponent 
      as='input' 
      type={type}
      value={value}
      onChange={onChange} 
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet
      }}
      {...props}
    />
  )
}

Input.defaultProps = {
  type: 'text',
  variant: 'body2',
  value: ''
}