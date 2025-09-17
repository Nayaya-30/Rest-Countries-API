import { Button } from '@mui/material'

const Border = ({ border, onClick }) => {
    return (
        <>
            <Button
                variant='filled'
                aria-label={`Border country: ${border}`}
                onClick={onClick}
                sx={{ 
                    textTransform: 'none', 
                    backgroundColor: "bgcolor.element", 
                    color: 'text.primary', 
                    boxShadow: 4, 
                    marginBottom: '8px',
                    '&:hover': { 
                        backgroundColor: 'bgcolor.body' 
                    } 
                }}
            >
                {border}
            </Button>
        </>
    )
}

export default Border;