import React, { FunctionComponent } from 'react';
import {
  Typography,
  TypographyProps,
  makeStyles,
  Theme,
} from '@material-ui/core';
import basekick from './utils/basekick';
import classnames from 'classnames';

export type TextVariant = 'heading' | 'normal';

export interface TextProps {
  variant?: TextVariant;
  //
  style?: TypographyProps['style'];
  noWrap?: TypographyProps['noWrap'];
}
/*
  | 'root'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'srOnly'
  | 'alignLeft'
  | 'alignCenter'
  | 'alignRight'
  | 'alignJustify'
  | 'noWrap'
  | 'gutterBottom'
  | 'paragraph'
  | 'colorInherit'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'colorTextPrimary'
  | 'colorTextSecondary'
  | 'colorError'
  | 'displayInline'
  | 'displayBlock';
*/

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
  variant: TextVariant;
}

const DescenderHightScale = {
  Roboto: 0.165,
};

const Sizes = {
  heading: {
    typeRowSpan: 3,
    typeSizeModifier: 2.1,
  },
  normal: {
    typeRowSpan: 2,
    typeSizeModifier: 1.4,
  },
};

const useStyles = (props: StyleProps) => {
  const { base, baseline, cropFirstLine } = basekick({
    typeSizeModifier: Sizes[props.variant].typeSizeModifier,
    baseFontSize: 10,
    gridRowHeight: 9,
    typeRowSpan: Sizes[props.variant].typeRowSpan,

    capHeight: 0.6,
    descenderHeightScale: DescenderHightScale.Roboto,
  });
  return makeStyles({
    base,
    baseline,
    cropFirstLine,
  });
};

export const Text: FunctionComponent<TextProps> = ({
  variant = 'normal',
  children,
  ...props
}) => {
  const { base, baseline, cropFirstLine } = useStyles({ variant })();
  return (
    <Typography
      className={classnames(base, baseline, cropFirstLine)}
      {...props}
    >
      {children}
    </Typography>
  );
};
