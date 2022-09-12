import SearchIcon from '@mui/icons-material/Search';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

interface IProps {
    handleFilter: (filter: string) => any
    filter: string
}
const PhoneBookSearch = ({ handleFilter, filter }: IProps) => {
    return (
        <FormControl fullWidth sx={{ m: 1, backgroundColor: 'white' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-search">Search for contact by last name...</InputLabel>
            <OutlinedInput
                id="outlined-adornment-search"
                type={'text'}
                value={filter}
                onChange={(e) => handleFilter(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="search visibility"
                            edge="end"
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                label="Search for contact by last name..."
            />
        </FormControl>
    )
}

export default PhoneBookSearch;