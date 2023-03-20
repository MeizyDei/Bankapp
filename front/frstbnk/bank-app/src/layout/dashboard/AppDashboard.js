import * as React from 'react';
import {Box, Container, createTheme, Grid, Paper, ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from "@mui/material/Toolbar";

import Pages from './Pages';
import HeaderAndMenu from "./HeaderAndMenu";
import Footer from "./Footer";



const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function DashboardContent() {
    return(
        <ThemeProvider theme={darkTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <HeaderAndMenu/>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar/>
                    <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                                    <Pages />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Footer sx={{pt: 4}} />
                    </Container>
                </Box>
            </Box>


        </ThemeProvider>
    )
}

export default function AppDashboard() {
    return <DashboardContent/>;
}
