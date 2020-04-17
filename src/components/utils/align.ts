// Based on seek-sos/braid-design-system

import { ResponsiveProp, mapResponsiveProp } from './responsiveProp';

export type Align = 'left' | 'center' | 'right';
export type AlignVert = 'top' | 'center' | 'bottom';

export const alignToFlexAlign = (align: ResponsiveProp<Align> | undefined) =>
  mapResponsiveProp(align, {
    left: 'flexStart',
    center: 'center',
    right: 'flexEnd'
  });

export const alignVertToFlexAlign = (
  alignVert: ResponsiveProp<AlignVert> | undefined
) =>
  mapResponsiveProp(alignVert, {
    top: 'flexStart',
    center: 'center',
    bottom: 'flexEnd'
  });
