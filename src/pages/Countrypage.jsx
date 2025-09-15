import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { Prev, Next } from "../components/country/PrevNext.jsx";
import Border from "../components/country/Border.jsx";
import Details from "../components/country/Details.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const Countrypage = () => {
  const { id } = useParams();
  const countryList = useSelector((state) => state.country.data);
  const country = countryList.find((c) => c.cca3 === id);
  const navigate = useNavigate();

  if (!country) return <p>Country not found.</p>;

  const currentIndex = countryList.findIndex((c) => c.cca3 === id);

  function handlePrev() {
    if (currentIndex > 0) {
      navigate(`/country/${countryList[currentIndex - 1].cca3}`);
    }
  }

  function handleNext() {
    if (currentIndex < countryList.length - 1) {
      navigate(`/country/${countryList[currentIndex + 1].cca3}`);
    }
  }

  function handleBorderClick(border) {
    navigate(`/country/${border}`);
  }

  return (
    <main>
      <Stack>
        <Prev onClick={handlePrev} />
        <Next onClick={handleNext} />
      </Stack>

      <Stack>
        <img src={country.flags.png} alt={country.name.common} />

        <Stack>
          <Details country={country} />

          {country.borders?.map((b) => (
            <Border key={b} border={b} onClick={() => handleBorderClick(b)} />
          ))}
        </Stack>
      </Stack>
    </main>
  );
};