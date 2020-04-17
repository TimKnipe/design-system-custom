type Color = string;

interface PaletteColor {
  main: Color;
  light: Color;
  dark: Color;
  textHighlight: Color;
}

interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  success: PaletteColor;
  neutral: PaletteColor;
}

type PaletteNames = keyof Palette;
type SpaceNames = keyof Theme['space'];

export interface Theme {
  palette: Palette;
  space: {
    gutter: number;
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
  };
}
