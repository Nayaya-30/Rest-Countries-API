import { Stack, Typography } from "@mui/material";
import ThemeToggle from "./themeToggle/ThemeToggle.jsx";

const Heading = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor='bgcolor.elements'
            sx={{ boxShadow: 4 }}
            className="py-3 px-20 shadow-2xl"
        >
            <Typography color='text.primary' fontWeight={'bold'} variant="h4">Where in the world?</Typography>
            <ThemeToggle />
        </Stack>
    );
};

export default Heading;