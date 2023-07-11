import { Container, ThemeProvider, createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { Navigation } from "./components";
import { Home, Qualification, Skills } from "./views";
import Repositories from "./views/Projects";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = (event: any) => {
      event.preventDefault();

      const container = document.getElementById('container');
      if(container){
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollAmount = event.deltaY;

        if (scrollAmount > 0 && container.scrollTop < containerHeight - windowHeight) {
          container.scrollTop += scrollAmount;
        } else if (scrollAmount < 0 && container.scrollTop > 0) {
          container.scrollTop += scrollAmount;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const theme = createTheme({
    palette: {
      primary: indigo,
      secondary: { main: '#fff', contrastText: '#757575' }
    },
  })

  // return (
  //   <ThemeProvider theme={theme}>
  //     <Container maxWidth='md'>
  //       <Navigation />
  //       <div id="container">
  //         <Home />
  //         <Skills />
  //         <Qualification />
  //         <Repositories />
  //       </div>
  //     </Container>
  //   </ThemeProvider>
  // )
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
        <Navigation />
        <div id="container" className="container">
        <div className="section">
          <Home />
        </div>
        <div className="section">
          <Skills />
        </div>
        <div className="section">
          <Qualification />
        </div>
        <div className="section">
          <Repositories />
        </div>
      </div>
      </Container>
    </ThemeProvider>
    
  );
}

export default App
