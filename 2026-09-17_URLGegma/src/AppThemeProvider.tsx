import React from "react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import type { LinkProps } from "@mui/material/Link";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router";
import { useAppSelector } from "./hooks";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useAppSelector((state) => state.colorScheme.colorScheme);
  const theme = createTheme({
    cssVariables: true,
    palette: {
      mode: colorScheme,
      primary: { main: "#9e1030" },
      secondary: { main: "#12544F" },
    },
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
  });

  return (
    <StyledEngineProvider enableCssLayer>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default AppThemeProvider;
