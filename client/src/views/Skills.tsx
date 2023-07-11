import { Grid, Typography, useTheme } from "@mui/material";
import Title from "../components/Title";
import { FC } from "react";

const programming = [
    ['Python', 'Java', 'JavaScript'],
    ['FastApi', 'Django', 'React', 'Spring']
]
const devops = [
    ['Docker', 'LXC', 'Kubernetes'],
    ['AWS', 'Terraform']
]
const other = [
    ['GitLab CI/CD', 'ML', 'RabbitMQ'],
    ['Kafka', 'Elasticsearch', 'Qt', 'Flutter'],
    ['Large Scale Scrum']
]
const databases = [
    ['SQL', 'NoSQL']
]
const languages = [
    ['Polish (Native)', 'English (B2)']
]

const fields = [
    {name: 'Programming', skills: programming},
    {name: 'DevOps', skills: devops},
    {name: 'Other', skills: other},
    {name: 'Databases', skills: databases},
    {name: 'Languages', skills: languages},
]

interface ISkill {
    label: string
    bold: boolean
}

const Skill: FC<ISkill> = ({ label, bold }) => {
    return (
        <Typography display='inline' margin='5px' borderBottom='1px dashed' fontWeight={bold ? 500 : 400}>{label}</Typography>
    )
}

interface IField {
    label: string
    skills: string[][]
}

const Field: FC<IField> = ({ label, skills }) => {
    const theme = useTheme()
    return (
        <Grid xs={4} padding='10px'>
            <Typography variant='subtitle2' color='primary' fontWeight='700'>
                {label}:
            </Typography>
            <Typography padding='5px' color={theme.palette.secondary.contrastText}>
                {skills.map(line => <>
                    {line.map(skill => <Skill label={skill} bold={false} />)}
                    <div />
                </>)}
            </Typography>
        </Grid>
    )
}

const Skills = () => {
    return (
        <Grid id='skills' container height='100vh' direction='column' justifyContent='center'>
            <Title><>SKILLS</></Title>
            <Grid container justifyContent='center'>
                {fields.map(field => <Field label={field.name} skills={field.skills}/>)}
            </Grid>
        </Grid>
    )
}

export default Skills