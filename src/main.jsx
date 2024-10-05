import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2', // azul principal
      light: '#6fb3f7', // azul más claro para mayor contraste
      dark: '#115594', // azul más oscuro
    },
    secondary: {
      main: '#9ba4b3', // un gris azulado más oscuro
      light: '#c7d5e8', // el tono original puede ser el claro
    },
    background: {
      paper: '#2e343b', // un fondo más oscuro para componentes
      default: '#212121', // fondo general oscuro
    },
    text: {
      primary: '#ffffff', // texto blanco para buena visibilidad
      secondary: '#c7d5e8', // texto secundario más suave
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
