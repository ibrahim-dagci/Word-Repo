export type Colors = {
  defaultButtonText: string;
  pageBackground: string;
  defaultButton: string;
  headerTitle: string;
  gradient: string[];
  headrTint: string;
  header: string;
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
