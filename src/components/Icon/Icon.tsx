import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import * as icons from './svgs/_index';

const iconSizes = {
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '36px',
} as const;

interface IconProps {
  name: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
  viewBox?: string;
}
export default function Icon({ size, name, viewBox, ...props }: IconProps) {
  const CurrentIcon = icons[name];
  return (
    <BaseComponent
      as="svg"
      styleSheet={{
        width: iconSizes[size!],
        height: iconSizes[size!],
      }}
      color="inherit"
      fill="currentColor"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CurrentIcon />
    </BaseComponent>
  )
}

Icon.defaultProps = {
  name: 'default_icon',
  size: 'md',
  viewBox: '0 0 24 24',
}
