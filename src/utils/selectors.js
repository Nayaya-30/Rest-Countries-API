import { createSelector } from '@reduxjs/toolkit';

const selectCountryState = (state) => state.country;

export const filteredCountries = createSelector(
  [selectCountryState],
  (country) => {
    const { data, searchTerm, region } = country;

    return data.filter((c) => {
      const matchesRegion =
        region === 'All' || c.region === region;
      const matchesSearch =
        c.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesRegion && matchesSearch;
    });
  }
);

export default filteredCountries;
