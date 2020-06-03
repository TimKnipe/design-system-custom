// Based on Braid design system from Seek
// https://github.com/seek-oss/braid-design-system/blob/dc052d40889d6f584971480b21bb6596ff4ec5b1/lib/hooks/typography/basekick.ts

interface BaseKickOptions {
  typeSizeModifier: number;
  baseFontSize: number;
  descenderHeightScale: number;
  capHeight: number;
  typeRowSpan: number;
  gridRowHeight: number;
}

/*
export const Mybasekick = ({
  typeSizeModifier,
  baseFontSize,
  descenderHeightScale,
  typeRowSpan, // what is this?
  gridRowHeight,
  capHeight,
}: BaseKickOptions) => {
  const fontSize = typeSizeModifier * baseFontSize;

  const lineHightOffset = Math.floor((lineHeight - fontSize) / 2);
  const fontOffset = fontDescenderHeight + lineHeightOffset;

  return {
    base: {
      fontSize,
      lineHeight,
    },
    baselineTransform: {
      transform: `translateY(${fontOffset}px)`,
    },
    cropFirstLine: {
      paddingTop: preventCollapse,
      '&::before': {
        content: '""',
        marginTop: -(?),
        display: 'block',
        height: 0,
      }
    }
  }
};
*/

export default ({
  typeSizeModifier,
  baseFontSize,
  descenderHeightScale,
  typeRowSpan,
  gridRowHeight,
  capHeight,
}: BaseKickOptions) => {
  const fontSize = typeSizeModifier * baseFontSize;

  const calculateTypeOffset = (lh: number) => {
    const lineHeightScale = lh / fontSize;
    return (lineHeightScale - 1) / 2 + descenderHeightScale;
  };

  const lineHeight = typeRowSpan * gridRowHeight;
  const typeOffset = calculateTypeOffset(lineHeight);

  const topSpace = lineHeight - capHeight * fontSize;
  const heightCorrection =
    topSpace > gridRowHeight ? topSpace - (topSpace % gridRowHeight) : 0;

  const preventCollapse = 1;

  return {
    base: {
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
    },
    baseline: {
      transform: `translateY(${typeOffset}em)`,
    },
    cropFirstLine: {
      paddingTop: preventCollapse,
      '&::before': {
        content: '""',
        marginTop: -(heightCorrection + preventCollapse),
        display: 'block',
        height: 0,
      },
    },
  };
};
