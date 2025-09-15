import { Card, CardActions, CardContent, CardMedia, Stack, Button, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCountries from '../../utils/fetchCountries.js';
import filteredCountries from '../../utils/selectors.js';
// import { useFetch } from '../../hooks/useFetch';
// import { setData } from '../../slices/countrySlice.js';



const Cards = () => {

    // first method using custom useFetch hook
    // const { data, loading, error } = useFetch('https://restcountries.com/v3.1/independent?status=true');
    // const countryFiltered = useSelector(filteredCountries);

    // useEffect(() => {
    //     if (data) {
    //         dispatch(setData(data));
    //     }
    // }, [data, dispatch]);

    // second method using Redux AsyncThunk
    const countryFiltered = useSelector(filteredCountries)
    const status = useSelector(state => state.country.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if(status==='idle') dispatch(fetchCountries())
    }, [status, dispatch])

    


    return (
        <section className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20 pb-10 px-20'}>
            {countryFiltered.map(c => (
                <Card 
                    key={c.cca3.toString()} 
                    sx={{ 
                        maxWidth: '100%', 
                        maxHeight: 350, 
                        boxShadow: 3, 
                        borderRadius: 2, 
                        backgroundColor: 'bgcolor.elements', 
                        color: 'text.primary' 
                    }} 
                    onClick={() => {}}
                >
                    <CardMedia
                        component={'img'}
                        image={c.flags.png}
                        alt={c.name.common}
                        sx={{
                            borderRadius: 2,
                            width: '100%',
                            height: '50%',
                        }}
                    />

                    <CardContent sx={{padding: 4, marginTop: 4}}>
                        <Stack>
                            <Typography variant="h5" fontWeight={700} marginBottom={4}>
                                {c.name.common}
                            </Typography>

                            <Stack spacing={1}>
                                <Typography variant="body2">
                                    <strong>Population:</strong> <span sx={{color: 'text.secondary'}}>{c.population}</span>
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Region:</strong> <span sx={{color: 'text.secondary'}}>{c.region}</span>
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Capital:</strong> <span sx={{color: 'text.secondary'}}>{c.capital}</span>
                                </Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            ))}
        </section>
    )
}

export default Cards;