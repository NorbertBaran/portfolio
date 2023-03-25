import {Footer, Navigation} from "./components";
import {About, Contact, Home, Projects, Qualification, Skills} from "./views";
import {Container, createTheme, ThemeProvider, Typography} from "@mui/material";
import {indigo} from "@mui/material/colors";


function App() {
    const theme = createTheme({
        palette: {
            primary: indigo,
            secondary: { main: '#fff', contrastText: '#757575'}
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='md'>
                <Navigation/>
                <Home/>
                <About/>
                <Skills/>
                <Qualification/>
                <Projects/>
                <Contact/>
                <Footer/>
            </Container>
        </ThemeProvider>
    )
}

export default App
