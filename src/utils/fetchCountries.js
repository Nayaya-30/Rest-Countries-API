import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCountries = createAsyncThunk('countries/fetchCountries',
    async () => {
    const res = await fetch('https://restcountries.com/v3.1/independent?status=true');
    const data = await res.json();

    return data; // can also extract some fields from here data.map(c => {tz: c.timezone})
})
export default fetchCountries;