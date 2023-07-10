import { Container, ThemeProvider, createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { Navigation } from "./components";
import { Home, Qualification, Skills } from "./views";
import Repositories from "./views/Projects";
import { FullPage, Slide } from 'react-full-page';


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
                <FullPage controls>
                    <Navigation />
                    <Slide>
                        <Home />
                    </Slide>
                    <Slide>
                        <Skills />
                    </Slide>
                    <Slide>
                        <Qualification />
                    </Slide>
                    <Slide>
                        <Repositories />
                    </Slide>
                </FullPage>
            </Container>
        </ThemeProvider>
    )
}

export default App
