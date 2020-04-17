// Expose flexbox functionality as props
import { Box as MUI_Box } from '@material-ui/core';
// import {
//   borders,
//   ComposedStyleFunction,
//   compose,
//   css,
//   display,
//   flexbox,
//   grid,
//   palette,
//   positions,
//   shadows,
//   sizing,
//   spacing,
//   typography,
// } from '@material-ui/system';
// import { styled } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
// import {
//   Align,
//   alignToFlexAlign,
//   AlignVert,
//   alignVertToFlexAlign,
// } from './utils/align';

// type BoxStyleFunction = ComposedStyleFunction<
//   [
//     typeof borders,
//     typeof display,
//     typeof flexbox,
//     // typeof grid,
//     typeof palette,
//     typeof positions,
//     // typeof shadows,
//     typeof sizing,
//     typeof spacing,
//     // typeof typography
//   ]
// >;

// const styleFunction = css(compose(borders, palette));

interface BoxProps {
  inline?: Boolean;
  align?: 'left' | 'center' | 'right';
  alignVert?: 'top' | 'center' | 'bottom';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
  reverse?: Boolean;
}

const alignConvert = (
  align?:
    | 'left'
    | 'center'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly',
) =>
  align === 'left'
    ? 'flex-start'
    : align === 'center'
    ? 'center'
    : align === 'right'
    ? 'flex-end'
    : align;

const alignVertConvert = (
  alignVert?:
    | 'top'
    | 'center'
    | 'bottom'
    | 'space-between'
    | 'space-around'
    | 'space-evenly',
) =>
  alignVert === 'top'
    ? 'flex-start'
    : alignVert === 'center'
    ? 'center'
    : alignVert === 'bottom'
    ? 'flex-end'
    : alignVert;

const flexDirectionConvert = (
  inline: Boolean = false,
  reverse: Boolean = false,
) => {
  if (inline && reverse) {
    return 'row-reverse';
  } else if (inline && !reverse) {
    return 'row';
  } else if (!inline && reverse) {
    return 'column-reverse';
  } else if (!inline && !reverse) {
    return 'column';
  }
  return '';
};

export const Box: FunctionComponent<BoxProps> = ({
  align,
  alignVert,
  alignContent,
  inline,
  reverse,
  wrap,
  ...props
}) => {
  const needFlex = true;
  return (
    <MUI_Box
      display={needFlex ? 'flex' : 'block'}
      flexWrap={wrap}
      flexDirection={flexDirectionConvert(inline, reverse)}
      justifyContent={
        inline ? alignConvert(align) : alignVertConvert(alignVert)
      }
      alignItems={inline ? alignVertConvert(alignVert) : alignConvert(align)}
      alignContent={alignContent}
      flexGrow="initial"
      {...props}
    />
  );
};
