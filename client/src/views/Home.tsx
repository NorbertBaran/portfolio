import {Button, Grid, Typography, useTheme} from "@mui/material";
import owner from '../assets/norbert.baran.jpg'
import {GitHub, LinkedIn} from "@mui/icons-material";

const Home = () => {
    const theme = useTheme()
    return (
        <Grid id='home' container height='100vh' alignItems='center'>
            <Grid container direction='column' alignItems='center' xs={2} gap='15px'>
                <LinkedIn fontSize='large' sx={{color: theme.palette.secondary.contrastText}}/>
                <GitHub fontSize='large' sx={{color: theme.palette.secondary.contrastText}}/>
            </Grid>
            <Grid xs={5}>
                <Typography variant='h3'>
                    Hi, I'm Norbert
                </Typography>
                <Typography variant='h6' color={theme.palette.secondary.contrastText} marginTop='5px' marginBottom='3px'>
                    Junior full stack developer
                </Typography>
                <Typography color={theme.palette.secondary.contrastText}>
                    Highly motivated and hardworking person able to deal with new technologies.
                </Typography>
                <Button variant='contained' sx={{width: '150px', marginTop: '10px'}}>CV PDF</Button>
            </Grid>
            <Grid container xs={5} justifyContent='center'>
                <img src={owner} style={{width: '300px', height: '300px', borderRadius: '60% 45% 75% 40%'}}/>
            </Grid>
        </Grid>
    )
}

export default Home