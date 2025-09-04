import Card from '../components/home/Card.jsx'
import Filters from '../components/home/Filter.jsx'
import SearchInput from '../components/home/Search.jsx'
import { Stack } from '@mui/material'

export const Homepage = () => {
    return (
        <>
            <Stack
                direction='row'
                alignItems={'center'}
                justifyContent={'space-between'}
                className={'px-20 my-10'}
                spacing={2}
            >
                <SearchInput />
                <Filters />
            </Stack>
            <Card />
        </>
    )
}