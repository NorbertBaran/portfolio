import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Link, Paper, Typography } from "@mui/material";
import { Slider } from "../components";
import Title from "../components/Title";

const repositories = [{
    name: 'Speaker',
    language: 'React + FastAPI',
    color: '#3F51B5',
    description: 'Natural sounding text to speech synthesis',
    github: 'https://github.com/NorbertBaran/speaker',
    preview: 'http://3.68.78.96/speaker/'
}, {
    name: 'GitHub Manager',
    language: 'Bash',
    color: '#4CAF50',
    description: 'Command line tool providing a user-friendly interface for managing repositories',
    github: 'https://github.com/NorbertBaran/github-manager',
    preview: null
}, {
    name: 'React Components',
    language: 'React',
    description: 'React library providing reusable UI components',
    github: 'https://github.com/NorbertBaran/react-components',
    preview: 'https://64392804afb9b6dfbc9a51b0-omcshwwuql.chromatic.com/?path=/docs/navbar--docs'
}, {
    name: 'Ardigen GitHub Search',
    language: 'Vanilla JavaScript',
    color: '#503a92',
    description: 'Ardigen - bioinformatics company recruitment task',
    github: 'https://github.com/NorbertBaran/ardigen-github-search',
    preview: 'http://3.68.78.96/ardigen-github-search/'
}, {
    name: 'HexOcean Dishes',
    language: 'React',
    color: '#2BB7E2',
    description: 'HexOcean - custom web application company recruitment task',
    github: 'https://github.com/NorbertBaran/hex-ocean-dishses',
    preview: 'http://3.68.78.96/hex-ocean-dishes/'
}]

const PaperRepository = ({ repository }) => {
    return (
        <Paper
            key={repository.name}
            sx={{
                width: '200px',
                height: '250px',
                bgcolor: repository.color
            }}
        >
            <Typography variant="subtitle1" align="center">{repository.name}</Typography>
            <Button disabled={!repository.preview}>Preview</Button>
            <Button>GitHub</Button>
        </Paper>
    )
}

const Repository = ({ repository }) => {
    return (
        <Card variant="outlined" sx={{ width: '250px'}}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: repository.color}}>
                        {repository.name[0]}
                    </Avatar>
                }
                title={repository.name}
                subheader={repository.language}
            />
            <CardContent sx={{ height: '60px', display: 'flex', alignItems: 'center'}}>
                <Typography align="center">{repository.description}</Typography>
            </CardContent>
            <CardActions>
                <Box width='100%' display='flex' justifyContent='center'>
                    <Button href={repository.github} target="_blank">GitHub</Button>
                    <Button href={repository.preview} target="_blank" disabled={!repository.preview}>Preview</Button>
                </Box>
            </CardActions>
        </Card>
    )
}

const Repositories = () => {
    return (
        <Grid id='projects' container height='100vh' direction='column' justifyContent='center'>
            <Title>PROJECTS</Title>
            <Slider shift={135}>
                {repositories.map(repository =>
                    <Repository repository={repository} />
                )}
            </Slider>
        </Grid>
    )
}

export default Repositories