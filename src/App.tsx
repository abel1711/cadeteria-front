import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./config/MUIThemeConfig";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ModalLoading } from "./components";
import { CssBaseline } from '@mui/material';
import { Rutas } from "./router";




function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
            <Rutas />
          <ModalLoading />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
