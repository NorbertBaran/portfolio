import { Typography } from "@mui/material"

const Title = ({children}) => {
    return (
        <Typography variant='h4' marginBottom='30px'>
            <Typography variant='h4' display='inline' color='primary' fontWeight='500'>&lt; </Typography>
            {children}
            <Typography variant='h4' display='inline' color='primary' fontWeight='500'> /&gt;</Typography>
        </Typography>
    )
}

export default Title