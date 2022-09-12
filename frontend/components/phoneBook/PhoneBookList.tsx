import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IPhoneBook } from './PhoneBookModels';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

interface IProps {
    phones: IPhoneBook[]
    handleDelete: (phoneData: IPhoneBook) => any
    handleEdit: (phoneData: IPhoneBook) => any
    filter: string
}

export default function PhoneBookList({ phones, handleDelete, handleEdit, filter }: IProps) {
    const [phonesList, setPhoneList] = React.useState([] as IPhoneBook[])
    React.useEffect(() => {
        const new_phones = [] as IPhoneBook[];
        phones.map(book => {
            if (book.lastName.toLowerCase().includes(filter.toLowerCase())) {
                new_phones.push(book)
            }
        });
        setPhoneList(new_phones)
    }, [phones, filter])
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper', m: 1 }}>
            {phonesList.map
                ? phonesList.map(book => (<div key={book.id}>
                    <ListItem sx={{ justifyContent: "center" }} secondaryAction={
                        <>
                            <IconButton aria-label="delete" color="warning" onClick={() => handleEdit(book)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="Edit" color="error" onClick={() => handleDelete(book)}>
                                <DeleteIcon />
                            </IconButton>
                        </>

                    }>
                        <ListItemText primary={
                            <Typography sx={{ mt: 1 }} variant='h5'>
                                {book.firstName + ' ' + book.lastName}
                            </Typography>
                        }
                            secondary={
                                <Typography variant='subtitle1' sx={{ mt: 1, display: "flex", color: '#b6aba7', alignItems: 'center' }}>
                                    <LocalPhoneIcon sx={{ mr: 1 }} />
                                    {book.phoneNumber}
                                </Typography>
                            } />
                    </ListItem>
                    <Divider component="div" />
                </div>))
                : null}

        </List >
    );
}
