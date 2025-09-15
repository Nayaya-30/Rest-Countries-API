import {TextField, InputAdornment, IconButton } from "@mui/material";
import { MdSearch } from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux'
import { setSearchTerm } from "/src/slices/countrySlice.js";

const SearchInput = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.country.searchTerm)
    console.log(searchTerm)

    return (
        <TextField
            name='search'
            placeholder="Search for a country..."
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            slotProps={{
                input: {
                    sx: {borderRadius: 2},
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton color='text.primary' background={'bgcolor.elements'} size="small">
                                <MdSearch />
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
            sx={{
                backgroundColor: "bgcolor.elements",
                input: { color: "text.primary" },
                borderRadius: 2,
                width: 450,
                color: "text.primary",
            }}
        />
    );
}
export default  SearchInput;