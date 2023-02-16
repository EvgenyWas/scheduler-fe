import "styled-components";
import { ITheme, ETheme } from "./types/styled";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    type: ETheme;
  }
}
