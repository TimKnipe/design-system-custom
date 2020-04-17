import React, { FunctionComponent } from 'react';
import { ResponsiveProp } from './utils/responsiveProp';
import { ReactNodeNoStrings } from './utils/reactNodeNoStrings';
import {
  Box as MUIBox,
  BoxProps as MUIBoxProps,
  makeStyles,
} from '@material-ui/core';

const alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex',
} as const;

export interface StackProps {
  align?: 'left' | 'center' | 'right';
  spacing?: number;
  children: ReactNodeNoStrings;

  m?: MUIBoxProps['m'];
  p?: MUIBoxProps['p'];
  bgcolor?: MUIBoxProps['bgcolor'];
}

interface StyleProps {
  spacing?: number;
}

const useStyles = makeStyles(({ spacing }) => ({
  stackitem: {
    display: 'inherit',
    flexDirection: 'inherit',
    alignItems: 'inherit',
    width: '100%',
    paddingBottom: (props: StyleProps) =>
      props.spacing ? spacing(props.spacing) : undefined,
  },
}));

const normaliseChildrenArray = (
  children: ReactNodeNoStrings,
): ReactNodeNoStrings[] => {
  if (Array.isArray(children)) {
    return children;
  } else if (typeof children === 'undefined') {
    return [];
  } else {
    return [children];
  }
};

const getDisplay = (align: StackProps['align']) =>
  alignToDisplay[align ?? 'center'];
const getFlexDirection = (align: StackProps['align']) =>
  align === 'left' ? undefined : 'column';
const getAlignItems = (align: StackProps['align']) =>
  align === 'left' ? undefined : align === 'right' ? 'flex-end' : 'center';

export const Stack: FunctionComponent<StackProps> = ({
  align,
  spacing,
  children,
  ...props
}) => {
  const { stackitem } = useStyles({ spacing });
  return (
    <MUIBox
      display={getDisplay(align)}
      flexDirection={getFlexDirection(align)}
      alignItems={getAlignItems(align)}
      {...props}
    >
      {normaliseChildrenArray(children).map((e, index, a) => (
        <MUIBox
          className={index === a.length - 1 ? undefined : stackitem}
          key={index}
        >
          {e}
        </MUIBox>
      ))}
    </MUIBox>
  );
};
