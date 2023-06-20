import { Container, ThemeProvider, createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { Footer, Navigation } from "./components";
import { Contact, Home, Qualification, Skills } from "./views";
import Repositories from "./views/Projects";


function App() {
    const theme = createTheme({
        palette: {
            primary: indigo,
            secondary: { main: '#fff', contrastText: '#757575' }
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='md'>
                <Navigation/>
                <Home />
                <Skills />
                <Qualification />
                <Repositories />
                <Contact />
                <Footer />
            </Container>
        </ThemeProvider>
    )
}

export default App
