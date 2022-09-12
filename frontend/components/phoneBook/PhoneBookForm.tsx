import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button, TextField, Typography } from '@mui/material';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IPhoneBook, phoneBookSchema } from './PhoneBookModels';


interface IProps {
    handleSave: (data: IPhoneBook) => any
    phone?: IPhoneBook

}

export default function PhoneBookForm({ handleSave, phone }: IProps) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IPhoneBook>({ resolver: yupResolver(phoneBookSchema) });

    const onSubmit: SubmitHandler<IPhoneBook> = (data) => {
        handleSave(data);
    };
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <div style={{ marginTop: 25 }}>
                <InputLabel htmlFor="firstName">
                    Fisrt Name
                </InputLabel>
                <TextField
                    fullWidth
                    id="firstName"
                    {...register('firstName')}
                    error={errors.firstName ? true : false}
                    defaultValue={phone?.firstName}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />

                <Typography variant="inherit" color="textSecondary">
                    {errors?.firstName?.message}
                </Typography>

            </div>
            <div style={{ marginTop: 25 }}>
                <InputLabel htmlFor="lastName">
                    Last Name
                </InputLabel>
                <TextField
                    fullWidth
                    id="lastName"
                    {...register('lastName')}
                    error={errors.lastName ? true : false}
                    defaultValue={phone?.lastName}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountBoxIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <Typography variant="inherit" color="textSecondary">
                    {errors?.lastName?.message}
                </Typography>

            </div>
            <div style={{ marginTop: 25 }}>
                <InputLabel htmlFor="phoneNumber">
                    Phone Number
                </InputLabel>
                <TextField
                    fullWidth
                    id="phoneNumber"
                    {...register('phoneNumber')}
                    error={errors.phoneNumber ? true : false}
                    defaultValue={phone?.phoneNumber}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocalPhoneIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <Typography variant="inherit" color="textSecondary">
                    {errors?.phoneNumber?.message}
                </Typography>

            </div>
            <div style={{ marginTop: 25 }}>
                <Button variant="contained" fullWidth onClick={handleSubmit(onSubmit)}>
                    Save
                </Button>
            </div>
        </Box >
    );
}
