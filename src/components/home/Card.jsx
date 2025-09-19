import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import fetchCountries from '../../utils/fetchCountries.js';
import filteredCountries from '../../utils/selectors.js';
import { motion } from "framer-motion";
// import { useFetch } from '../../hooks/useFetch';
// import { setData } from '../../slices/countrySlice.js';



const Cards = () => {

    // first method using custom useFetch hook
    // const { data, loading, error } = useFetch('https://restcountries.com/v3.1/independent?status=true');
    // const countryFiltered = useSelector(filteredCountries);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (data) {
    //         dispatch(setData(data));
    //     }
    // }, [data, dispatch]);

    // second method using Redux AsyncThunk
    
    const countryFiltered = useSelector(filteredCountries)
    const status = useSelector(state => state.country.status);
    const [colCount, setColCount] = useState(getColCount());
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(status === 'idle' || status === 'failed!') dispatch(fetchCountries())
    }, [status, dispatch])

    useEffect(() => {
    const handleResize = () => setColCount(getColCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
   }, []);

   function getColCount() {
    if (window.innerWidth >= 1024) return 4; // lg:grid-cols-4
    if (window.innerWidth >= 768) return 3;  // md:grid-cols-3
    if (window.innerWidth >= 640) return 2;  // sm:grid-cols-2
    return 1;                                // default grid-cols-1
   }
   
    // animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,   // delay between siblings
            delayChildren: 0.2,     // initial delay for each row group
        },
        },
    };

    return (
        <motion.section 
            variants={container}
            initial="hidden"
            animate='show'
            viewport={{ once: true, amount: 0.01 }} // animate once when entering viewport
            className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20 pb-10 px-20'}
        >
            {countryFiltered.map((c, index) => {
                const row = Math.floor(index / colCount); // which row it's in
                const col = index % colCount;             // which column in that row
                const rowDelay = 0.01;   // ⏳ fixed delay per row
                const colDelay = 0.2;   // ⏳ per-card delay inside row
                const delay = row * rowDelay + col * colDelay;

                return (
                    <motion.div
                        key={c.cca3.toString()}
                        initial={{ opacity: 0, y: 40, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay }}
                    >
                        <Card
                                sx={{
                                maxWidth: '100%',
                                height: '100%',
                                maxHeight: 350,
                                boxShadow: 4,
                                borderRadius: 2, 
                                backgroundColor: 'bgcolor.elements', 
                                color: 'text.primary',
                                cursor: 'pointer',
                                transition: 'all .3s ease-in-out',
                                '&:hover': { 
                                    boxShadow: 4, 
                                    transform: 'scale(1.05)',
                                    }
                                }} 
                                onClick={() => navigate(`/country/${c.cca3}`)}
                            >
                            <CardMedia
                                component={'img'}
                                image={c.flags.png}
                                alt={c.name.common}
                                sx={{
                                    borderRadius: 2,
                                    width: '100%',
                                    height: '50%',
                                    objectFit: "cover",
                                    boxShadow: 2,
                                }}
                            />

                            <CardContent sx={{padding: 4, marginTop: 4, flexGrow: 1}}>
                                <Stack>
                                    <Typography variant="h5" fontWeight={700} marginBottom={4}>
                                        {c.name.common}
                                    </Typography>

                                    <Stack spacing={1}>
                                        <Typography variant="body2">
                                            <strong>Population:</strong> <span sx={{color: 'text.secondary'}}>{c.population.toLocaleString()}</span>
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
                    </motion.div>
                )
            })}
        </motion.section>
    )
}

export default Cards;