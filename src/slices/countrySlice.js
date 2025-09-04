import { createSlice } from '@reduxjs/toolkit';
import fetchCountries from '../utils/fetchCountries.js'

const countrySlice = createSlice({
    name: 'country',
    initialState: {
        data: [],
        searchTerm: '',
        region: 'All',
        status: 'idle',
        error: '',
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setRegion: (state, action) => {
            state.region = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.status = 'loading...';
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'succeeded.';
                state.countries = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = 'failed!';
                state.error = action.error.message;
            });
    }
})

export const { setRegion, setSearchTerm } = countrySlice.actions;
export default countrySlice.reducer;