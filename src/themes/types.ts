export type Colors = {
  gradient: string[];
};

export type Variant = {
  key: string;
  colors: Colors;
};

export type Variants = {
  light: Variant;
  dark: Variant;
};
