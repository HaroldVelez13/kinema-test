import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, IconButton, Typography } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

interface IProps {
    handleAdd: () => any
}
export default function PhoneBookHeader({ handleAdd }: IProps) {
    return (
        <List sx={{ width: '100%' }}>
            <ListItem sx={{ justifyContent: "center" }} secondaryAction={
                <Button variant="contained" onClick={handleAdd}>
                    <PersonAddAlt1Icon sx={{ mr: 2 }} /> Add  Contact
                </Button>
            }>
                <ListItemText primary={<Typography variant="h3" component="h3">Contacts</Typography>} />
            </ListItem>
        </List>
    );
}