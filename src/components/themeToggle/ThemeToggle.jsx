import { Button } from "@mui/material";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../slices/themeToggleSlice";


function ThemeToggle() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <Button
            variant="text"
            aria-label="Toggle dark mode"
            color="text.primary"
            sx={{
                textTransform: 'none',
                fontSize: {
                    xs: '0.875rem',
                    sm: '0.925rem',
                    md: '1rem'
                },
                padding: {
                    xs: '0.5rem',
                    sm: '0.75rem',
                    md: '1rem'
                },
                '& .MuiButton-startIcon': {
                    marginRight: {
                        xs: '0.5rem',
                        sm: '0.75rem',
                        md: '1rem'
                    },
                    '& svg': {
                        fontSize: {
                            xs: '1rem',
                            sm: '1.25rem',
                            md: '1.5rem'
                        }
                    }
                }
            }}
            startIcon={darkMode ? <FaMoon /> : <FaSun />}
            onClick={() => dispatch(toggleDarkMode())}
        >
            {darkMode ? "Dark Mode" : "Light Mode"}
        </Button>
    );
}

export default ThemeToggle;
