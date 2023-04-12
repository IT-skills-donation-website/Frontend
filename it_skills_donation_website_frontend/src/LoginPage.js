import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import "./App.css";
// import { Login } from '@mui/icons-material';


const theme = createTheme();

const LoginPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box className="container">
                <Box className="logoContainer">
                    <Typography className="logo" variant="h4" component="h1">
                        IT 재능기부
                    </Typography>
                    <Button className="settingButton" variant="outlined">
                        Settings
                    </Button>
                </Box>
                <Box className="formContainer">
                    <Typography variant="h5" component="h2">
                        Login
                    </Typography>
                    <form>
                        <TextField
                            className="input"
                            label="Email"
                            variant="outlined"
                            type="email"
                            fullWidth
                            required
                        />
                        <TextField
                            className="input"
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            required
                        />
                        <Button
                            className="submitButton"
                            variant="contained"
                            endIcon={<LoginIcon />}
                            type="submit"
                            fullWidth
                        >
                            Sign In
                        </Button>
                    </form>
                    <a href="https://www.google.com" rel="noopener">
                        Don't have an account yet? Sign up
                    </a>
                </Box>
                <Box className="footerContainer">
                    <Typography className="footerText" variant="subtitle1">
                        © 2023 IT Skills Donation. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default LoginPage;
