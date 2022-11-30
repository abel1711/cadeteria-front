import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./config/MUIThemeConfig";
import { Provider } from "react-redux";
import { store } from "./redux/store";




function App() {

  return (
    <Provider store={ store }>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
