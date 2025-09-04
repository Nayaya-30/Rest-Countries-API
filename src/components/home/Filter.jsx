import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setRegion } from "/src/slices/countrySlice.js";

const Filters = () => {
    const dispatch = useDispatch();
    const region = useSelector(state => state.country.region);
    console.log(region)

    const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    return (
        <FormControl
            sx={{
                minWidth: 200,
                borderRadius: 2,
                backgroundColor: 'background.paper',
            }}
            size="small"
        >
            <InputLabel
                id="region-select-label"
                sx={{ fontWeight: 'bold' }}
            >
                Region
            </InputLabel>
            <Select
                variant="outlined"
                labelId="region-select-label"
                id="region-select"
                value={region}
                onChange={(e) => dispatch(setRegion(e.target.value))}
                label="Region"
                sx={{
                    borderRadius: 2,
                    color: 'text.primary',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'text.primary',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
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