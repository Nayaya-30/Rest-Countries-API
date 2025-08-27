import {TextField, InputAdornment, IconButton } from "@mui/material";
import { MdSearch } from "react-icons/md";

const SearchInput = () => {
    return (
        <TextField
            placeholder="Search for a country..."
            variant="outlined"
            size="small"
            slotProps={{
                input: {
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