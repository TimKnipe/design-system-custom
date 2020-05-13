import React, { FunctionComponent } from 'react';
import {
  Typography,
  TypographyProps,
  makeStyles,
  Theme,
} from '@material-ui/core';
import basekick from './utils/basekick';
import classnames from 'classnames';

export interface TextProps extends TypographyProps {
  size?: number;
}

/*
  Whitespace above Capitals and below descenders is clipped, allowing more
  predicatable layout.

  Sadly the configuration values must be tuned manually for each specific font.
    descenderHeightScale
    capHeight
    baseFontSize
    typeSizeModifier
*/

/* Roboto settings
    fontFamily: 'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    descenderHeightScale: 0.165,
    capHeight: 0.6,

      
*/

interface StyleProps {
  size: number;
}

const useStyles = (props: StyleProps) => {
  const { base, baseline, cropFirstLine } = basekick({
    baseFontSize: 1,
    capHeight: 0.6,
    descenderHeightScale: 0.165,
    gridRowHeight: 16,
    typeRowSpan: 1,
    typeSizeModifier: 16,
  });
  console.log('base:', base);
  console.log('baseline:', baseline);
  console.log('cropFirstLine:', cropFirstLine);
  return makeStyles({
    root: {
      ...base,
      ...baseline,
      ...cropFirstLine,
    },
  });
};

export const Text: FunctionComponent<TextProps> = ({
  size = 1,
  children,
  ...props
}) => {
  const { root } = useStyles({ size })();
  return (
    <Typography className={root} {...props}>
      {children}
    </Typography>
  );
};
