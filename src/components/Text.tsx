import React, { FunctionComponent } from 'react';
import { Typography, TypographyProps } from '@material-ui/core';

export interface TextProps extends TypographyProps {}

export const Text: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
);
