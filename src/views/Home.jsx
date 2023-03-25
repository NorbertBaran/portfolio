import {Button, Grid, Typography, useTheme} from "@mui/material";
import owner from '../assets/norbert.baran.jpg'
import {GitHub, LinkedIn} from "@mui/icons-material";

const Home = () => {
    const theme = useTheme()
    return (
        <Grid id='home' container height='100vh'>
            <Grid xs={2} display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='15px'>
                <LinkedIn fontSize='large' sx={{color: theme.palette.primary.contrastText}}/>
                <GitHub fontSize='large' sx={{color: theme.palette.primary.contrastText}}/>
            </Grid>
            <Grid xs={5} display='flex' flexDirection='column' justifyContent='center'>
                <Typography variant='h3'>
                    Hi, I'm Norbert
                </Typography>
                <Typography variant='h6' color={theme.palette.secondary.contrastText} marginTop='5px' marginBottom='3px'>
                    Junior full stack developer
                </Typography>
                <Typography color={theme.palette.secondary.contrastText}>
                    Highly motivated and hardworking person able to deal with new technologies based on their documentation.
                </Typography>
                <Button variant='contained' sx={{width: '150px', marginTop: '10px'}}>CV PDF</Button>
            </Grid>
            <Grid xs={5} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <img src={owner} style={{width: '300px', height: '300px', borderRadius: '60% 45% 75% 40%'}}/>
            </Grid>
        </Grid>
    )
}

export default Home