import React, { FunctionComponent } from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@material-ui/core';

export const Button: FunctionComponent<MUIButtonProps> = ({ ...props }) => (
  <MUIButton {...props} />
);
