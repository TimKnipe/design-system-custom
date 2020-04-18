import React, { FunctionComponent } from 'react';
import { ReactNodeNoStrings } from './utils/reactNodeNoStrings';
import {
  Box as MUIBox,
  BoxProps as MUIBoxProps,
  makeStyles,
} from '@material-ui/core';
import { normaliseChildrenArray } from './utils/normaliseChildrenArray';

export interface InlineProps {
  //
  space?: number;
  children: ReactNodeNoStrings;
  width?: string | number;
  reverse?: boolean;
  m?: MUIBoxProps['m'];
  p?: MUIBoxProps['p'];
  bgcolor?: MUIBoxProps['bgcolor'];
}

interface StyleProps {
  space?: number;
  width?: string | number;
}

const useStyles = makeStyles(({ spacing }) => ({
  inline: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
  },

  inlineitem: {
    display: 'inherit',
    flexDirection: 'inherit',
    alignItems: 'inherit',
    padding: (props: StyleProps) =>
      props.space ? spacing(props.space) : undefined,
  },
}));

export const Inline: FunctionComponent<InlineProps> = ({
  space,
  reverse,
  children,
  width,
  ...props
}) => {
  const { inline, inlineitem } = useStyles({ space, width });
  return (
    <MUIBox
      className={inline}
      flexWrap={reverse ? 'wrap-reverse' : 'wrap'}
      {...props}
    >
      {normaliseChildrenArray(children).map((e, index, a) => (
        <MUIBox className={inlineitem} key={index} width="auto">
          {e}
        </MUIBox>
      ))}
    </MUIBox>
  );
};
