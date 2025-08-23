import {Button, HStack, Heading} from 'rsuite'

export const Head = ({ onClick, themeToggle }) => {
    console.log('Button')
    return (
        <HStack shaded justifyContent={'space-between'} alignItems={'center'} className={'py-4 px-20 bg-gray-900'}>
            <Heading level={4} style={{color: 'white'}}>Where in the world?</Heading>

            <Button className={'text-white bg-gray-400'} appearance={'ghost'} size={'sm'} startIcon={''} onClick={onClick} active>
               {!themeToggle ? 'Dark Mode' : 'Light Mode'}
            </Button>
        </HStack>
    )
}