import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setRegion, setSearchTerm } from "/src/slices/countrySlice.js";

const Filters = () => {
    const dispatch = useDispatch();
    const region = useSelector(state => state.country.region);

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    function handleRegionChange(e) {
        dispatch(setRegion(e.target.value));
        dispatch(setSearchTerm('')); // Clear search term when region changes
    }

    return (
        <FormControl
            sx={{
                minWidth: 200,
                borderRadius: 2,
                backgroundColor: 'bgcolor.elements',
            }}
            size="small"
        >
            <InputLabel
                sx={{ 
                    fontWeight: 'bold', 
                    color: 'text.secondary', 
                    '&.Mui-focused': {
                        color: 'text.secondary',
                    }, 
                }}
            >
                Region
            </InputLabel>
            <Select
                variant="outlined"
                labelId="region-select-label"
                value={region}
                onChange={handleRegionChange}
                label="Region"
                sx={{
                    borderRadius: 2,
                    transition: 'all .4s ease-in-out',
                    color: 'text.primary',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'text.primary',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'text.secondary',
                    },
                }}
            >
                {regions.map(region => (
                    <MenuItem key={region} value={region} sx={{ fontWeight: 500 }}>
                        {region}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Filters;