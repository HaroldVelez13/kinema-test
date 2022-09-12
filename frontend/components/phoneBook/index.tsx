import { Button, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PhoneBookSearch from "./PhoneBookSearch"
import PhoneBookForm from "./PhoneBookForm";
import PhoneBookHeader from "./PhoneBookHeader";
import PhoneBookList from "./PhoneBookList";
import PhoneBookModal from "./PhoneBookModal";
import { IPhoneBook } from "./PhoneBookModels";
import PhoneBookDataService from './PhoneBook.service'


const PhoneBook = () => {
    const [open, setOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [phone, setPhone] = useState<IPhoneBook>({} as IPhoneBook);
    const [phones, setPhones] = useState<IPhoneBook[]>([] as IPhoneBook[]);
    const [filter, setFilter] = useState('');


    const retrievePhoneBooks = () => {
        PhoneBookDataService.getAll()
            .then((response: any) => {
                setPhones(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const savePhoneBook = (data: IPhoneBook) => {
        PhoneBookDataService.create(data)
            .then((_response: any) => {
                console.log(_response)
                retrievePhoneBooks();
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }
    const deletePhoneBook = (data: IPhoneBook) => {
        PhoneBookDataService.delete(data.id)
            .then((response: any) => {
                console.log(response.data);
                retrievePhoneBooks();
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    const updatePhoneBook = (data: IPhoneBook) => {
        PhoneBookDataService.update(
            data,
            phone.id
        )
            .then((response: any) => {
                console.log(response.data);
                retrievePhoneBooks();
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setIsDelete(false);
        setPhone({} as IPhoneBook)
        setOpen(false);
    };

    const handleAdd = () => {
        handleOpen()
    }

    const handleSave = (data: IPhoneBook) => {
        if (phone?.id) {
            updatePhoneBook(data)
        } else {
            savePhoneBook(data)
        }

        handleClose()
    }
    const handleEdit = (phoneData: IPhoneBook) => {
        setPhone(phoneData)
        handleOpen()
    }
    const handleDelete = (phoneData: IPhoneBook) => {
        setPhone(phoneData)
        setIsDelete(true)
        handleOpen()
    }
    const handleDeleteContact = () => {
        deletePhoneBook(phone)
        handleClose()
    }

    useEffect(() => {
        retrievePhoneBooks();
    }, [])
    return (

        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1 }}>
            <Grid item xs={10}>
                <PhoneBookHeader handleAdd={() => handleAdd()} />
            </Grid>
            <Grid item xs={10}>
                <PhoneBookSearch handleFilter={setFilter} filter={filter} />
            </Grid>
            <Grid item xs={10}>
                <PhoneBookList phones={phones} handleEdit={handleEdit} handleDelete={handleDelete} filter={filter} />
            </Grid>
            <PhoneBookModal open={open} handleClose={handleClose}>
                {isDelete
                    ? <div>
                        <Typography variant="h6" sx={{ mb: 3, m: 'auto', textAlign: 'center' }}>
                            Do you like delete the contact <strong>{phone.firstName} {phone.lastName}</strong>?
                        </Typography>
                        <Button variant="contained" color="error" fullWidth onClick={handleDeleteContact}>
                            Delete
                        </Button>
                    </div>
                    : <PhoneBookForm handleSave={handleSave} phone={phone} />
                }

            </PhoneBookModal>
        </Grid>

    )
}


export default PhoneBook;