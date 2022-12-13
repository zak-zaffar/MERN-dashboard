import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from "react-redux";
import { useMeno } from "react";
import { themeSettings } from "theme";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMeno(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>

    </div>
  );
}

export default App;
