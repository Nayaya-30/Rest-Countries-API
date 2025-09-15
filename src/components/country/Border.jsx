import { Button } from '@mui/material'

const Border = ({ border, onClick }) => {
    return (
        <>
            <Button variation='outlined' onClick={onClick}>
                {border}
            </Button>
        </>
    )
}

export default Border;