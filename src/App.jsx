import { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components';
import '@fontsource/press-start-2p'; 
import logo from './assets/logo.png';
import image1 from './assets/1.png';  
import image2 from './assets/2.png';  
import image3 from './assets/3.png';  
import lightBackground from './assets/light1.jpg';
import darkBackground from './assets/dark.png';  


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
    min-height: 100vh;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.8s ease;
  padding: 20px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 2vh;
  left: 1vw;
  width: 10vw;
  max-width: 120px;

  @media (max-width: 768px) {
    width: 15vw;
    max-width: 80px;
  }
`;

const StyledTitle = styled.h1`
  font-size: clamp(1.5rem, 4vw, 3rem);
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 5vw, 2.5rem);
    margin-bottom: 1rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const StyledImage = styled.img`
  width: 1300px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledButton = styled.button`
  font-size: clamp(0.8rem, 2vw, 1rem);
  padding: 1rem 2rem;
  background-color: ${props => props.theme.buttonColor};
  color: ${props => props.theme.buttonTextColor};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: clamp(150px, 20vw, 200px);
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const FooterLink = styled.a`
  color: ${props => props.theme.textColor};
  text-decoration: none;
  margin: 5px 0;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const lightTheme = {
  backgroundColor: '#f0f0f0',
  textColor: '#000',
  buttonColor: '#000',
  buttonTextColor: '#fff',
  backgroundImage: lightBackground, 
};

const darkTheme = {
  backgroundColor: '#000',
  textColor: '#fff',
  buttonColor: '#fff',
  buttonTextColor: '#000',
  backgroundImage: darkBackground, 
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleDownloadClick1 = () => {
    window.location.href = 'https://drive.google.com/file/d/10JZF62R6DLJ0UfXuFdZldfuyKBy5yyZf/view?usp=sharing'; 
  };
  const handleDownloadClick2 = () => {
    window.location.href = 'https://github.com/ayaanoski/8-bit-browser'; 
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Wrapper>
        <Logo src={logo} alt="Logo" />
        <StyledButton
          style={{
            position: 'absolute',
            top: '5vh',
            right: '2vw',
            borderRadius: '20px',
          }}
          onClick={toggleDarkMode}
        >
          {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
        </StyledButton>
        <StyledTitle>Welcome to my 8-bit World</StyledTitle>
        <StyledTitle style={{
          fontSize:20,
          paddingLeft:80,
          paddingRight:80,
          color:'orange'
        }}>hello , i'm Ayaan Adil and i made a 8-bit web browser supported by google.</StyledTitle>

        {/* Image Wrapper to display images above buttons */}
        <ImageWrapper>
          <StyledImage src={image1} alt="Image 1" />
          <StyledImage src={image2} alt="Image 2" />
          <StyledImage src={image3} alt="Image 3" />
        </ImageWrapper>
        <StyledTitle style={{
          fontSize:20,
          paddingLeft:80,
          paddingRight:80,
          color:'red'
        }}>Download this 8-bit browser from below, also checkout the github to modify this browser and make something of your own</StyledTitle> 
        {/* Button Wrapper to center the buttons */}
        <ButtonWrapper>
          <StyledButton onClick={handleDownloadClick1}>
            Download
          </StyledButton>
          <StyledButton onClick={handleDownloadClick2}>
            Github
          </StyledButton>
        </ButtonWrapper>
        <StyledTitle style={{
          fontSize:20,
          paddingLeft:80,
          paddingRight:80,
          paddingTop:30,
          color:'blue'
        }}>feel free to contact me via:</StyledTitle> 
        <FooterLink href="https://www.linkedin.com/in/ayaan-adil-371137268" target="_blank" rel="noopener noreferrer" style={{
          padding:5,
          color:'orange'
        }}>
        LinkedIn
      </FooterLink>
      <FooterLink href="https://github.com/ayaanoski" target="_blank" rel="noopener noreferrer" style={{
          padding:5,
          color:'orange'
        }}>
        GitHub
      </FooterLink>
      <FooterLink href="mailto:ayaanninja2403@gmail.com" style={{
          padding:5,
          color:'orange'
        }}>Email</FooterLink>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
