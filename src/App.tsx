import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./config/MUIThemeConfig";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ModalLoading } from "./components";




function App() {

  return (
    <Provider store={ store }>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <ModalLoading />
      </ThemeProvider>
    </Provider>
  )
}

export default App
