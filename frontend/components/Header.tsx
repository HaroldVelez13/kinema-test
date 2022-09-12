import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Typography } from '@mui/material';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1, mb: 10 }}>
            <AppBar position="fixed" >
                <Toolbar sx={{ justifyContent: "center" }}>
                    <AccountBoxIcon sx={{ fontSize: 40 }} />
                    <Typography variant="h4" component="div" sx={{ ml: 1 }}>
                        Phone Books App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
