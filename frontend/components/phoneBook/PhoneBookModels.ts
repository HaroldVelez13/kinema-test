import * as Yup from 'yup';

export const phoneBookSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('The First Name is required')
        .min(4, 'The First Name min characters are 4'),
    lastName: Yup.string()
        .required('The Last Name is required')
        .min(4, 'The Last Name min characters are 4'),
    phoneNumber: Yup.string()
        .required('The Phone Number is required')
        .max(12, 'The First Name max characters are 12'),
});

export interface IPhoneBook {
    id?: number
    firstName: string
    lastName: string
    phoneNumber: string
}