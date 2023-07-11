import { Box, Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import Title from "../components/Title";

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
    return (
        <Box id='experience' height='100vh' display='flex' flexDirection='column' justifyContent='center'>
            <Grid container display='flex' justifyContent='center'>
                <Grid xs={12}>
                    <Title><>EXPERIENCE</></Title>
                </Grid>
                <Grid maxWidth='sm'>
                    <Stepper activeStep={2} orientation="vertical">
                        {steps.map((step) => (
                            <Step key={step.label}>
                                <StepLabel>
                                    <Typography variant="subtitle1" fontWeight={500}>{step.label}</Typography>
                                    <Typography variant="body2">{step.description}</Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Experience