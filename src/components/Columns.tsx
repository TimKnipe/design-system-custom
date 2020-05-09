import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  Children,
  createContext,
  useContext,
} from 'react';
import { Box as MUIBox, makeStyles, Theme } from '@material-ui/core';
import { Stack } from './Stack';
import { ReactNodeNoStrings } from './utils/reactNodeNoStrings';

type Align = 'left' | 'center' | 'right';
type AlignY = 'top' | 'center' | 'bottom';

interface ColumnStyleProps {
  space?: number;
}

const preventCollapse = 0;

const useColumnStyles = makeStyles<Theme, ColumnStyleProps>(({ spacing }) => ({
  // columns: {
  //   boxSizing: 'border-box',
  // },
  columnsParent: {
    // paddingLeft: 1, // prevent collapse
    '&::before': {
      content: "''",
      display: 'block',
      marginLeft: props => -spacing(props?.space ?? 0) || preventCollapse,
    },
  },
  column: {
    marginLeft: ({ space }) => spacing(space || 0),
    width: '100%',
  },
}));

interface ResolveAlignmentPropsParams {
  align?: Align;
  alignY?: AlignY;
  reverse?: boolean;
}

const resolveAlignmentProps = ({
  align,
  alignY,
  reverse,
}: ResolveAlignmentPropsParams): Record<string, any> => {
  const result: Record<string, any> = {};
  result.display = align === 'left' ? 'block' : 'flex';
  result.flexDirection = 'row';
  return result;
};

export interface ColumnProps {
  children: ReactNodeNoStrings;
}

export interface ColumnsProps {
  space?: number;
  align?: Align;
  alignY?: AlignY;
  reverse?: boolean;
  children:
    | Array<ReactElement<ColumnProps> | null>
    | ReactElement<ColumnProps>
    | null;
}

const orderChildren = (children: ReactNode, reverse?: boolean) => {
  //
  const childrenArray = Children.toArray(children);
  return reverse ? childrenArray.reverse() : childrenArray;
};

interface ColumnsContextValue {
  space?: number;
  alignmentProps: Record<string, any>;
}

export const ColumnsContext = createContext<ColumnsContextValue>({
  alignmentProps: {},
});

export const Columns: FunctionComponent<ColumnsProps> = ({
  align,
  alignY,
  space,
  reverse,
  children,
  ...props
}) => {
  const alignmentProps = resolveAlignmentProps({
    align,
    alignY,
    reverse,
  });
  const { columnsParent } = useColumnStyles({ space });
  return (
    <ColumnsContext.Provider value={{ space, alignmentProps }}>
      <MUIBox className={columnsParent} {...props} {...alignmentProps}>
        {orderChildren(children, reverse)}
      </MUIBox>
    </ColumnsContext.Provider>
  );
};

export const Column: FunctionComponent<ColumnProps> = ({
  children,
  ...props
}) => {
  const { space } = useContext(ColumnsContext);
  const { column } = useColumnStyles({ space });
  return (
    <MUIBox className={column} {...props}>
      {children}
    </MUIBox>
  );
};
