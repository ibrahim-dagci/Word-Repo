export type Colors = {
  gradient: string[];
  modal: string;
  defaultButton: string;
  defaultButtonText: string;
  header: string;
  headrTint: string;
  headerTitle: string;
};

export type Variant = {
  key: string;
  colors: Colors;
};

export type Variants = {
  light: Variant;
  dark: Variant;
};
