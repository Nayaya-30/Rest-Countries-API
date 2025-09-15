import { Button } from '@mui/material'

export const Prev = ({ onClick }) => {
    return (
        <>
            <Button onClick={onClick}>
                Back
            </Button>
        </>
    )
}

export const Next = ({ onClick }) => {
    return (
        <>
            <Button onClick={onClick}>
                Next
            </Button>
        </>
    )
}