export type Colors = {
  defaultButtonText: string;
  pageBackground: string;
  defaultButton: string;
  headerTitle: string;
  gradient: string[];
  headrTint: string;
  secondary: string;
  primary: string;
  header: string;
  shadow: string;
  modal: string;
};

export type Variant = {
  colors: Colors;
  key: string;
};

export type Variants = {
  light: Variant;
  dark: Variant;
};
