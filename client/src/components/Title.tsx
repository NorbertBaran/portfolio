import { Typography } from "@mui/material"
import { FC } from "react"

interface ITitle {
    children: React.ReactElement
}

const Title: FC<ITitle> = ({children}) => {
    return (
        <Typography variant='h4' marginBottom='30px'>
            <Typography variant='h4' display='inline' color='primary' fontWeight='500'>&lt; </Typography>
            {children}
            <Typography variant='h4' display='inline' color='primary' fontWeight='500'> /&gt;</Typography>
        </Typography>
    )
}

export default Title