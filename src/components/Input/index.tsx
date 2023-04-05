import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import { ThemeTypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";
import React from "react";

interface InputProps {
  type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime' | 'email' | 'file' | 'image' | 'number' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'url' ;
  value?: string;
  placeholder?: string;
  variant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPressed?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef(({ type, value, children, variant, styleSheet, placeholder, onChange, onEnterPressed, ...props }: InputProps, ref) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant!];
  return (
    <BaseComponent 
      as='input' 
      type={type}
      ref={ref}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onEnterPressed} 
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet
      }}
      {...props}
    />
  )
})

Input.displayName = 'Input'

Input.defaultProps = {
  type: 'text',
  variant: 'body2',
  value: ''
}

export default Input;