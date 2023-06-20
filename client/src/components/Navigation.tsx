import {
    AppBar,
    Container,
    Link,
    Toolbar,
    Typography,
    useScrollTrigger,
    useTheme
} from "@mui/material";
import {cloneElement} from "react";

const NavLink = ({label, href}) => {
    const theme = useTheme()
    return(
        <Link
            href={href}
            variant='subtitle1'
            fontWeight={500}
            color='inherit'
            underline='none'
            margin='10px'
            fontSize='17px'
            sx={{
                '&:hover': {
                    color: theme.palette.primary.main
                }}}
        >
            {label}
        </Link>
    )
}

function ElevationScroll({children}) {
    const trigger = useScrollTrigger();

    return cloneElement(children, {
        elevation: 0,
        style: trigger ? {boxShadow: '0px 1px 1px 0px #ddd'} : {}
    });
}

const Navigation = () => {
    return(
        <>
            <ElevationScroll>
                <AppBar color='secondary'>
                    <Container maxWidth='lg'>
                        <Toolbar sx={{padding: '15px'}}>
                            <Typography variant='h6' sx={{ flexGrow: 1 }}>
                                <Typography variant='h6' display='inline' color='primary' fontWeight='500'>&lt; Norbert </Typography>
                                    Baran
                                <Typography variant='h6' display='inline' color='primary' fontWeight='500'> /&gt;</Typography>
                            </Typography>
                            <NavLink label='Home' href='#home'/>
                            <NavLink label='Skills' href='#skills'/>
                            <NavLink label='Experience' href='#experience'/>
                            <NavLink label='Projects' href='#projects'/>
                            <NavLink label='Contact' href='#contact'/>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
        </>
    )
}

export default Navigation