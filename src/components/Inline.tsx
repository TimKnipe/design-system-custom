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
  align?: 'left' | 'center' | 'right';
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
}

const preventCollapse = 0;

const useStyles = makeStyles(({ spacing, props }) => {
  console.log('style props:', props);
  return {
    inlineParent: {
      // paddingTop: 1, // prevent collapse
      '&::before': {
        content: "''",
        display: 'block',
        marginTop: (props: StyleProps) =>
          -spacing(props?.space ?? 0) || preventCollapse,
      },
    },

    inline: {
      display: 'flex',
      boxSizing: 'border-box',
      flexDirection: 'row',
      width: 'auto', // make sure width includes -ve margin, otherwise content is truncated on the right
      marginLeft: (props: StyleProps) => -spacing(props?.space ?? 0),
    },

    inlineitem: {
      display: 'inherit',
      flexDirection: 'inherit',
      alignItems: 'inherit',
      paddingLeft: (props: StyleProps) => spacing(props.space ?? 0),
      paddingTop: (props: StyleProps) => spacing(props.space ?? 0),
    },
  };
});

const getJustifyContent = (align?: InlineProps['align']) =>
  align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start';

export const Inline: FunctionComponent<InlineProps> = ({
  align,
  space,
  reverse,
  children,
  ...props
}) => {
  const { inlineParent, inline, inlineitem } = useStyles({ space });
  // We need a wrapper box, so the negative overflow caused by the negative margin of the interior box gets clipped
  return (
    <MUIBox className={inlineParent} {...props}>
      <MUIBox
        className={inline}
        flexWrap={reverse ? 'wrap-reverse' : 'wrap'}
        justifyContent={getJustifyContent(align)}
      >
        {normaliseChildrenArray(children).map((e, index, a) => (
          <MUIBox className={inlineitem} key={index} width="auto">
            {e}
          </MUIBox>
        ))}
      </MUIBox>
    </MUIBox>
  );
};
