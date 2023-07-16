import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };

    colors: {
      dark: string;
      light: string;
    };
  }
}
