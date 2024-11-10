// src/App.js
import './App.css';
import Header from './components/Header/Header';
import { Title } from './components/Title/Title';
import { Box } from '@mui/material';
import { TimelineDemo } from './components/timelineDemo';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import { NavbarDemo } from './components/navbarDemo';
import RowAndColumnSpacing from './components/Curriculum/Curriculum';
import { WobbleCardDemo } from './components/wobbleCardDemo';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: '#040E1E', 
          minHeight: '100vh', 
          color: 'text.primary',
        }}
      >
        <NavbarDemo/>
        <Title />
        <Header />
        <RowAndColumnSpacing/>
        <TimelineDemo />

        <WobbleCardDemo/>
      </Box>
      
    </ThemeProvider>
  );
}

export default App;

