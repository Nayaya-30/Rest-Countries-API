import { Stack, Typography } from "@mui/material";

const Details = ({ country }) => {
  if (!country) return null;

  return (
    <Stack spacing={2}>
      <Typography variant="h4" fontWeight={700}>
        {country.name.common}
      </Typography>

      <Typography>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </Typography>
      <Typography>
        <strong>Region:</strong> {country.region}
      </Typography>
      <Typography>
        <strong>Subregion:</strong> {country.subregion}
      </Typography>
      <Typography>
        <strong>Capital:</strong> {country.capital?.[0]}
      </Typography>
    </Stack>
  );
};

export default Details;
