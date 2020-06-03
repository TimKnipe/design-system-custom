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

  Roboto settings
    fontFamily: 'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    descenderHeightScale: 0.165,
      capHeight: 0.6,    
*/

interface StyleProps {
  size: number;
}

const DescenderHightScale = {
  Roboto: 0.16,
};

const useStyles = (props: StyleProps) => {
  const { base, baseline, cropFirstLine } = basekick({
    typeSizeModifier: 1.4,
    baseFontSize: 10,
    gridRowHeight: 9,
    typeRowSpan: 2,

    capHeight: 0.6,
    descenderHeightScale: DescenderHightScale.Roboto,
  });
  console.log('base:', base);
  console.log('baseline:', baseline);
  console.log('cropFirstLine:', cropFirstLine);
  return makeStyles({
    base,
    baseline,
    cropFirstLine,
  });
};

export const Text: FunctionComponent<TextProps> = ({
  size = 1,
  children,
  ...props
}) => {
  const { base, baseline, cropFirstLine } = useStyles({ size })();
  return (
    <Typography
      className={classnames(base, baseline, cropFirstLine)}
      {...props}
    >
      {children}
    </Typography>
  );
};
