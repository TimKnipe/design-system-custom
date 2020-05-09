import { useTheme } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export interface CollapsibleAlignmentProps {
  align: 'left' | 'center' | 'right';
  alignVert: 'top' | 'center' | 'bottom';
  collapseBelow?: Breakpoint;
  reverse?: boolean;
}

export function resolveCollapsibleAlignmentProps({
  align,
  alignVert,
  collapseBelow,
  reverse,
}: CollapsibleAlignmentProps) {
  const theme = useTheme();
  const collapse = collapseBelow
    ? theme.breakpoints.down(collapseBelow)
    : false;
  return {
    display: 'flex',
  };
}
