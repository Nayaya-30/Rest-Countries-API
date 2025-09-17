import { Button } from '@mui/material'

const Border = ({ border, onHover, onClick }) => {
    return (
        <>
            <Button
                variant='filled'
                aria-label={`Border country: ${border}`}
                onClick={() => onClick(border)}
                onMouseEnter={() => onHover(border)}
                onMouseLeave={() => onHover(null)}
                sx={{ 
                    textTransform: 'none', 
                    backgroundColor: "bgcolor.elements", 
                    color: 'text.primary', 
                    boxShadow: 4, 
                    marginBottom: '5px',
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