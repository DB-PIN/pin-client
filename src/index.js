import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Page/Login';
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/system";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: `#ea534b`
        }
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>

);