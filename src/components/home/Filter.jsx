import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'
import { useState } from 'react'

// /**
//  * @param {{ onRegionChange?: (region: string) => void }} props
//  */
export const Filters = () => {
    const [selectedRegion, setSelectedRegion] = useState('')

    /** @type {string[]} */
    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

    const handleRegionChange = (event) => {
        const value = event.target.value
        setSelectedRegion(value)
    }

    return (
        <FormControl
            sx={{
                minWidth: 200,
                color: 'text.primary',
                backgroundColor: 'bgcolor.elements'}}
            size="small"
        >
            <InputLabel fontWeight={'bold'} id="region-select-label">Region</InputLabel>
            <Select
                variant='outlined'
                labelId="region-select-label"
                id="region-select"
                value={selectedRegion}
                onChange={handleRegionChange}
                label="Region"
                sx={{
                    borderColor: 'text.primary',
                    color: 'text.primary',
                    backgroundColor: 'bgcolor.elements',
                    borderRadius: 2,
                    '&:hover': {
                        borderColor: 'border.main',
                    }
                }}
            >
                {regions.map((region) => (
                    <MenuItem
                        key={region}
                        value={region}
                    >
                        {region}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
