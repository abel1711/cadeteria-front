import { createTheme } from '@mui/material/styles';

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
  
  export const theme = createTheme({
    palette:{
      mode: 'light'
    },
    typography:{
      error1:{
        color: '#d32f2f'
      }
    }
  });
  