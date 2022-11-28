import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { ThemeProvider, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    error1: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    error1?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error1: true;
  }
}

const theme = createTheme({
  palette:{
    mode: 'light'
  },
  typography:{
    error1:{
      color: '#d32f2f'
    }
  }
});



function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
