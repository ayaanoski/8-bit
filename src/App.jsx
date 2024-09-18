import { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components';
import '@fontsource/press-start-2p'; // Ensures the font is loaded across all devices
import logo from './assets/logo.png';
import lightBackground from './assets/light1.jpg'; // Import your light mode background image
import darkBackground from './assets/dark.png';   // Import your dark mode background image

// Keyframes for blur and opacity transition
const fadeIn = keyframes`
  0% {
    opacity: 0;
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Press Start 2P', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${props => props.theme.backgroundColor};
    background-image: url(${props => props.theme.backgroundImage});
    background-size: cover;
    background-position: center;
    color: ${props => props.theme.textColor};
    transition: background-color 0.8s ease, background-image 0.8s ease;
  }

  * {
    transition: color 0.8s ease;
  }
`;

const Wrapper = styled.div`
  text-align: center;
  animation: ${fadeIn} 0.8s ease; /* Apply blur animation */
`;

const Logo = styled.img`
  position: absolute;
  top: 2vh;
  left: 1vw;
  width: 10vw;
  max-width: 120px;
`;

const StyledTitle = styled.h1`
  font-size: clamp(1.5rem, 4vw, 3rem);
  margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  font-size: clamp(0.8rem, 2vw, 1rem);
  padding: 1rem 2rem;
  background-color: ${props => props.theme.buttonColor};
  color: ${props => props.theme.buttonTextColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledDownloadButton = styled(StyledButton)`
  background-color: ${props => props.theme.downloadButtonColor};
  color: ${props => props.theme.downloadButtonTextColor};
`;

const lightTheme = {
  backgroundColor: '#f0f0f0',
  textColor: '#000',
  buttonColor: '#000',
  buttonTextColor: '#fff',
  downloadButtonColor: '#000',
  downloadButtonTextColor: '#fff',
  backgroundImage: lightBackground, 
};

const darkTheme = {
  backgroundColor: '#000',
  textColor: '#fff',
  buttonColor: '#fff',
  buttonTextColor: '#000',
  downloadButtonColor: '#fff',
  downloadButtonTextColor: '#000',
  backgroundImage: darkBackground, 
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleDownloadClick1 = () => {
    window.location.href = 'https://drive.google.com/file/d/10JZF62R6DLJ0UfXuFdZldfuyKBy5yyZf/view?usp=sharing'; // Replace with the desired URL
  };
  const handleDownloadClick2 = () => {
    window.location.href = 'https://github.com/ayaanoski/8-bit-browser'; // Replace with the desired URL
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Wrapper> {/* Apply animation to the wrapper */}
        <Logo src={logo} alt="Logo" />
        <StyledButton 
          style={{
            position: 'absolute',
            top: '5vh',
            right: '2vw',
            borderRadius: '20px'
          }} 
          onClick={toggleDarkMode}
        >
          {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
        </StyledButton>
        <StyledTitle 
          style={{
            position: 'absolute',
            left: '18vw',
            top: '5vh',
            fontSize: 'clamp(1.5rem, 5vw, 3rem)'
          }}
        >
          Welcome to my 8-bit World
        </StyledTitle>
        <StyledTitle 
          style={{
            position: 'absolute',
            left: '10vw',
            top: '15vh',
            display:'flex',
            justifyContent:'center',
            fontSize: 'clamp(1.2rem, 4vw, 2.5rem)'
          }}
        >
          Download this 8-bit browser from below
        </StyledTitle>
        <StyledButton 
          style={{ 
            borderRadius: '20px', 
            marginTop: '2vh',
            width: '20vw',
            maxWidth: '200px'
          }}
          onClick={handleDownloadClick1}
        >
          Download
        </StyledButton>
        <StyledButton 
          style={{ 
            borderRadius: '20px', 
            margin: 30, 
            width: '20vw', 
            maxWidth: '200px' 
          }}
          onClick={handleDownloadClick2}
        >
         Github
        </StyledButton>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
