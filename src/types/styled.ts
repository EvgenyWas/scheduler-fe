export enum ETheme {
  scheduler = "scheduler",
  dark = "dark",
  clover = "clover",
}

export interface ITheme {
  colors: Record<string, string>;
  fonts: {
    general: string;
  };
  fs: Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl", string>;
  lh: Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl", string>;
  fw: {
    regular: number;
    medium: number;
  };
  media: Record<"sm" | "md" | "lg" | "xl", string>;
}
