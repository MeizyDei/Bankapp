import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {AccountCircle} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';



const Header = ({drawerWidth, open, toggleDrawer}) => {




    const navigate = useNavigate()

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({theme, open}) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    return (
        <AppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && {display: 'none'}),
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{flexGrow: 1}}
                >
                    Bank app
                </Typography>
                <IconButton color="inherit" onClick={() => navigate('/settings')}>
                        <SettingsIcon/>
                </IconButton>
                <IconButton color="inherit">
                </IconButton>
                <Button variant="contained" startIcon={<AccountCircle />}
                        onClick={() => navigate('/signup')}
                        color="secondary"
                        sx={{
                            ml: 1
                        }}>
                    Sign Up
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header