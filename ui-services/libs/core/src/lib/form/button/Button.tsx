import React, { PropsWithChildren, useMemo } from 'react';

import styles from './Button.module.scss';
import { ButtonColor, ButtonPlacement, ButtonSize, ButtonVariant } from './Button.model';
import clsx from 'clsx';

export interface ButtonProps {
  icon?: JSX.Element;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  color?: ButtonColor;
  placement?: ButtonPlacement;
  onClick?: (event: unknown)=> void; 
}


/**
 * @component Button
 * @description Buttons are interactive elements that trigger an action or an event.
 * @param size (Optional) should be one of  "small" | "medium"(default) | "large"
 * @param variant (Optional) should be one of "text" | "outlined"(default) | "contained"
 * @param disabled (Optional) true | false(default)
 * @param color (Optional)  should be one of "primary" | "secondary" | "danger"
 * @param placement (Optional)
 * @param onClick (Optional)
 */
export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  icon,
  size="medium",
  variant="contained",
  disabled=false,
  color="primary",
  placement="start",
  children,
  ...props
}) => {
  const matches = false;
  return useMemo(
    () => (
      <React.Fragment>
        {/*icon && (matches || !children) && (
          <Tooltip title={children ?? 'Click here'}>
            <IconButton {...props}>{icon}</IconButton>
          </Tooltip>
        )*/}
        {!(icon && (matches || !children)) && (
          <button 
            className={
              clsx([
                styles.button,
                `button--size--${size}`,
                `button--variant--${variant}`,
                `button--color--${color}`
              ])
            }
            {...props}>{children}</button>
        )}
      </React.Fragment>
    ),
    [children, color, icon, matches, props, size, variant]
  );
};

export default Button;
