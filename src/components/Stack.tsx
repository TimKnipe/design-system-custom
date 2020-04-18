import React, { FunctionComponent } from 'react';
import { ResponsiveProp } from './utils/responsiveProp';
import { ReactNodeNoStrings } from './utils/reactNodeNoStrings';
import {
  Box as MUIBox,
  BoxProps as MUIBoxProps,
  makeStyles,
} from '@material-ui/core';
import { normaliseChildrenArray } from './utils/normaliseChildrenArray';

const alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex',
} as const;

export interface StackProps {
  align?: 'left' | 'center' | 'right';
  space?: number;
  children: ReactNodeNoStrings;

  m?: MUIBoxProps['m'];
  p?: MUIBoxProps['p'];
  bgcolor?: MUIBoxProps['bgcolor'];
}

interface StyleProps {
  space?: number;
}

const useStyles = makeStyles(({ spacing }) => ({
  stackitem: {
    display: 'inherit',
    flexDirection: 'inherit',
    alignItems: 'inherit',
    width: '100%',
    paddingBottom: (props: StyleProps) =>
      props.space ? spacing(props.space) : undefined,
    // '&:last-sibling': {
    // paddingBottom: 0,
    // },
  },
}));

const getDisplay = (align: StackProps['align']) =>
  alignToDisplay[align ?? 'center'];
const getFlexDirection = (align: StackProps['align']) =>
  align === 'left' ? undefined : 'column';
const getAlignItems = (align: StackProps['align']) =>
  align === 'left' ? undefined : align === 'right' ? 'flex-end' : 'center';

export const Stack: FunctionComponent<StackProps> = ({
  align,
  space,
  children,
  ...props
}) => {
  const { stackitem } = useStyles({ space });
  return (
    <MUIBox
      display={getDisplay(align)}
      flexDirection={getFlexDirection(align)}
      alignItems={getAlignItems(align)}
      {...props}
    >
      {normaliseChildrenArray(children).map((e, index, a) => (
        <MUIBox className={stackitem} key={index}>
          {e}
        </MUIBox>
      ))}
    </MUIBox>
  );
};
