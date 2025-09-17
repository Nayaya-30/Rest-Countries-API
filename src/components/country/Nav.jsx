import { Button } from '@mui/material'
import { FaArrowLeft } from "react-icons/fa";

export const Nav = ({ text="Back", onClick, icon=<FaArrowLeft />}) => {
    return (
        <>
            <Button 
                sx={{
                    color: 'text.primary',
                    boxShadow: 4,
                    textTransform: 'none',
                    '&:hover': { 
                        backgroundColor: 'bgcolor.body' 
                    }
                }} 
                variant='filled' 
                startIcon={icon}
                onClick={onClick}
            >
                {text}
            </Button>
        </>
    )
}