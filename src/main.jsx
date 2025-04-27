import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider} from 'notistack'
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <SnackbarProvider>
    <App />
    </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>,
)
