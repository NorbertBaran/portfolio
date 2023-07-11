import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Slider } from "../components";
import Title from "../components/Title";

interface IRepository {
    color: string | undefined
    name: string
    language: string
    description: string
    github: string
    preview: string | undefined
}

const repositories: IRepository[] = [{
    name: 'Speaker',
    language: 'React + FastAPI',
    color: '#3F51B5',
    description: 'Natural sounding text to speech synthesis',
    github: 'https://github.com/NorbertBaran/speaker',
    preview: 'http://quecto.pl/speaker/'
}, {
    name: 'GitHub Manager',
    language: 'Bash',
    color: '#4CAF50',
    description: 'Command line tool providing a user-friendly interface for managing repositories',
    github: 'https://github.com/NorbertBaran/github-manager',
    preview: undefined
}, {
    name: 'React Components',
    language: 'React',
    color: undefined,
    description: 'React library providing reusable UI components',
    github: 'https://github.com/NorbertBaran/react-components',
    preview: 'https://64392804afb9b6dfbc9a51b0-omcshwwuql.chromatic.com/?path=/docs/navbar--docs'
}, {
    name: 'Ardigen GitHub Search',
    language: 'Vanilla JavaScript',
    color: '#503a92',
    description: 'Ardigen - bioinformatics company recruitment task',
    github: 'https://github.com/NorbertBaran/ardigen-github-search',
    preview: 'http://quecto.pl/ardigen-github-search/'
}, {
    name: 'HexOcean Dishes',
    language: 'React',
    color: '#2BB7E2',
    description: 'HexOcean - custom web application company recruitment task',
    github: 'https://github.com/NorbertBaran/hex-ocean-dishes',
    preview: 'http://quecto.pl/hex-ocean-dishes/'
}]

interface IRepositoryTile {
    repository: IRepository
}

const RepositoryTile: FC<IRepositoryTile> = ({ repository }) => {
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
                    <Button href={repository.preview != undefined ? repository.preview : ''} target="_blank" disabled={repository.preview == undefined}>Preview</Button>
                </Box>
            </CardActions>
        </Card>
    )
}

const Repositories = () => {
    return (
        <Grid id='projects' container height='100vh' direction='column' justifyContent='center'>
            <Title><>PROJECTS</></Title>
            <Slider shift={270}>
                {repositories.map(repository =>
                    <RepositoryTile repository={repository} />
                )}
            </Slider>
        </Grid>
    )
}

export default Repositories