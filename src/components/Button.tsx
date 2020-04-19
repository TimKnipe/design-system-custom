import React, { FunctionComponent } from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  b: {
    width: (props: any) => props.width,
  },
});

export interface ButtonProps extends MUIButtonProps {
  width?: string | number;
}

export const Button: FunctionComponent<ButtonProps> = ({ width, ...props }) => {
  const { b } = useStyles({ width });
  return <MUIButton className={b} {...props} />;
};
