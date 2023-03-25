import {Box, Grid, Step, StepContent, StepLabel, Stepper, Typography} from "@mui/material";

const steps = [
    {
        label: 'Comarch, java developer',
        description: `Maintaining and developing CEE/CFE product, enterprise resource planning system. First steps in professional software development`,
    },
    {
        label: 'Frege contributor',
        description:
            'Software Engineering Jagiellonian Institute\'s open-source project, which aims to analyze various metrics of open-sources repositories ',
    },
    {
        label: 'SFI IT Academic Festival, IT Section Member',
        description: `Diverse responsibilities, from development and maintenance of the organization's services to deployment and management of testing and production infrastructure`,
    },
];

const Experience = () => {
    return(
        <Box id='experience' height='100vh' display='flex' flexDirection='column' justifyContent='center'>
            <Grid container display='flex' justifyContent='center'>
                <Grid xs={12}>
                    <Typography variant='h4' marginBottom='30px'>
                        <Typography variant='h4' display='inline' color='primary' fontWeight='500'>&lt; </Typography>
                        EXPERIENCE
                        <Typography variant='h4' display='inline' color='primary' fontWeight='500'> /&gt;</Typography>
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <Stepper activeStep={2} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 2 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Experience