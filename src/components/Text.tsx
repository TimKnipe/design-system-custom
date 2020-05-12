import React, { FunctionComponent } from 'react';
import { Typography, TypographyProps } from '@material-ui/core';
import basekick from './utils/basekick';

export interface TextProps extends TypographyProps {}

export const Text: FunctionComponent<TextProps> = ({ children, ...props }) => {
  const { base, baseline, cropFirstLine } = basekick({
    baseFontSize: 1,
    capHeight: 1,
    descenderHeightScale: 1,
    gridRowHeight: 1,
    typeRowSpan: 1,
    typeSizeModifier: 1,
  });
  return <Typography {...props}>{children}</Typography>;
};
