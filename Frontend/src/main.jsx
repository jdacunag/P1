import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { SessionProvider } from './hooks/useSession';
import './index.css';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SessionProvider>
            <Router />
        </SessionProvider>
    </React.StrictMode>,
);
