import { Container, ThemeProvider, createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { Navigation } from "./components";
import { Home, Qualification, Skills } from "./views";
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
        <Navigation />
        <Home />
        <Skills />
        <Qualification />
        <Repositories />
      </Container>
    </ThemeProvider>
  )
}

export default App
