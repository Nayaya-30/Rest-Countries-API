import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCountries = createAsyncThunk('countries/fetchCountries',
    async () => {
    const res = await fetch('/data.json');
    const data = await res.json();

    return data.map(c => ({
        name: c.name,
        pop: c.population,
        tld: c.topLevelDomain,
        cc: c.callingCode,
        cap: c.capital,
        sr: c.subregion,
        r: c.region,
        area: c.area,
        bod: c.border,
        nn: c.nativeName,
        cur: [c.currencies.name, c.currencies.symbol, c.currencies.code],
        lang: c.languages.flatMap(obj => Object.values(obj)),
        flag: c.flag,
        rBloc: c.regionalBloc.flatMap(obj => Object.values(obj)),
        abr: c.cioc,
        tz: c.timezone,
        numc: c.numericCode,
        ind: c.independence,
    }));
})
export default fetchCountries;