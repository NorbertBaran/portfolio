import {Box, Grid, Typography, useTheme} from "@mui/material";

const Skill = ({label, bold}) => {
    const theme = useTheme()
    return(
        <Typography display='inline' margin='5px' borderBottom='1px dashed' fontWeight={bold ? 500 : 400}>{label}</Typography>
    )
}

const Skills = () => {
    const theme = useTheme()
    return(
        <Box id='skills' height='100vh' display='flex' flexDirection='column' justifyContent='center'>
            <Grid container display='flex' justifyContent='center'>
                <Grid xs={12}>
                    <Typography variant='h4' marginBottom='30px'>
                        <Typography variant='h4' display='inline' color='primary' fontWeight='500'>&lt; </Typography>
                        SKILLS
                        <Typography variant='h4' display='inline' color='primary' fontWeight='500'> /&gt;</Typography>
                    </Typography>
                </Grid>
                <Grid xs={4} padding='10px'>
                    <Typography variant='subtitle2' color='primary' fontWeight='700'>
                        Programming:
                    </Typography>
                    <Typography padding='5px' color={theme.palette.secondary.contrastText}>
                        <Skill label='Python' bold/>
                        <Skill label='Java'/>
                        <Skill label='JavaScript'/>
                        <div/>
                        <Skill label='FastApi'/>
                        <Skill label='Django'/>
                        <Skill label='React' bold/>
                        <Skill label='Spring'/>
                    </Typography>
                </Grid>
                <Grid xs={4} padding='10px'>
                    <Typography variant='subtitle2' color='primary' fontWeight='700'>
                        DevOps:
                    </Typography>
                    <Typography padding='5px' color={theme.palette.secondary.contrastText}>
                        <Skill label='Docker'/>
                        <Skill label='LXC'/>
                        <Skill label='Kubernetes' bold/>
                        <div/>
                        <Skill label='AWS'/>
                        <Skill label='Terraform'/>
                    </Typography>
                </Grid>
                <Grid xs={4} padding='10px'>
                    <Typography variant='subtitle2' color='primary' fontWeight='700'>
                        Other:
                    </Typography>
                    <Typography padding='5px' color={theme.palette.secondary.contrastText}>
                        <Skill label='GitLab CI/CD' bold/>
                        <Skill label='ML'/>
                        <Skill label='RabbitMQ' bold/>
                        <div/>
                        <Skill label='Kafka' bold/>
                        <Skill label='Elasticsearch' bold/>
                        <Skill label='Qt'/>
                        <Skill label='Flutter'/>
                        <div/>
                        <Skill label='Large Scale Scrum'/>
                    </Typography>
                </Grid>
                <Grid xs={4} padding='10px'>
                    <Typography variant='subtitle2' color='primary' fontWeight='700'>
                        Databases:
                    </Typography>
                    <Typography padding='5px' color={theme.palette.secondary.contrastText}>
                        <Skill label='SQL' bold/>
                        <Skill label='NoSQL'/>
                    </Typography>
                </Grid>
                <Grid xs={4} padding='10px'>
                    <Typography variant='subtitle2' color='primary' fontWeight='700'>
                        Languages:
                    </Typography>
                    <Typography padding='5px' color={theme.palette.secondary.contrastText}>
                        <Skill label='Polish (Native)'/>
                        <Skill label='English (B2)'/>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Skills