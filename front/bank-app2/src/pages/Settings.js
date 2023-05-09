import Head from 'next/head';
import {Box, Container, Stack, Typography} from '@mui/material';

const Settings = () => (
    <>
        <Head>
            <title>
                Settings
            </title>
        </Head>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <Typography variant="h4">
                        Settings
                    </Typography>

                </Stack>
            </Container>
        </Box>
    </>
);

export default Settings;