import { CssBaseline, GlobalStyles } from "@mui/material";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { useAppSelector } from "./hooks";

function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useAppSelector((state) => state.colorScheme.colorScheme);
  const theme = createTheme({
    cssVariables: true,
    palette: {
      mode: colorScheme,
      primary: { main: "#9e1030" },
      secondary: { main: "#12544F" },
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
