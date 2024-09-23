import { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components';
import '@fontsource/press-start-2p'; 
import logo from './assets/logo.png';
import image1 from './assets/1.png';  
import image2 from './assets/2.png';  
import image3 from './assets/3.png';  
import image4 from './assets/4.png'; 
import lightBackground from './assets/light1.jpg';
import darkBackground from './assets/dark2.jpg';  
import linkedinLogo from './assets/linked.png';  // LinkedIn logo
import instagramLogo from './assets/insta.png';  // Instagram logo
import emailLogo from './assets/gmail.png';  // Email logo
import github from './assets/github.png';

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
    overflow-x: hidden; /* Prevent horizontal scrolling */
    overflow-y: scroll; /* Ensure scrollbar is always visible */
  }

  * {
    transition: color 0.8s ease;
  }

  /* Custom Pixelated Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 20px; /* Wider for pixelated effect */
    background-color: ${props => props.theme.backgroundColor};
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.backgroundColor}; /* Same as background for a seamless look */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.buttonColor}; /* Main scrollbar color */
    border: 4px solid ${props => props.theme.backgroundColor}; /* Blocky edges */
    border-radius: 0; /* Remove rounded corners to achieve the pixelated look */
    box-shadow: inset 0 0 0 4px ${props => props.theme.textColor}; /* Inner blocky effect */
    image-rendering: pixelated; /* Ensures that it remains pixelated */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.textColor}; /* Changes color on hover */
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
  max-width: 100vw; /* Prevent content from exceeding viewport width */
  box-sizing: border-box; /* Include padding and border in element's total width and height */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0; /* Fix padding issue */
  background-color: transparent;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const Logo = styled.img`
  width: 10vw;
  max-width: 120px;

  @media (max-width: 768px) {
    width: 15vw;
    max-width: 80px;
  }
`;

const StyledTitle = styled.h1`
  font-size: clamp(1.5rem, 4vw, 3rem);
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 5vw, 2.5rem);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
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
  cursor: pointer; /* Correct cursor property */
  width: clamp(150px, 20vw, 200px);
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    width: 70vw;
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
  width: 100%;
  max-width: 1300px; /* Ensure images don’t exceed this width */
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: transparent;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterLink = styled.a`
  color: ${props => props.theme.textColor};
  text-decoration: none;
  font-size: 16px;

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
      <Wrapper style={{
        padding:50
      }}>
        <NavBar>
          <Logo src={logo} alt="Logo" />
          <StyledTitle>Welcome to my 8-bit World</StyledTitle>
          <ButtonWrapper>
            <StyledButton onClick={toggleDarkMode} style={{ fontSize: 13 }}>
              {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
            </StyledButton>
            <StyledButton onClick={handleDownloadClick1} style={{ fontSize: 14 }}>
              Download
            </StyledButton>
            <StyledButton onClick={handleDownloadClick2} style={{ fontSize: 14, padding: 14 }}>
              github
              <img src={github} alt="GitHub" style={{ width: '20px', height: '20px', paddingLeft: 14 }} />
            </StyledButton>
          </ButtonWrapper>
        </NavBar>

        <StyledTitle style={{
          fontSize: 30,
          paddingLeft: 50,
          paddingRight: 50,
          color: 'orange',
        }}>
          hello, i'm Ayaan Adil and I made an 8-bit (moreover pixelated) web browser supported by Google.
        </StyledTitle>
        <StyledTitle style={{
          fontSize: 50,
          paddingLeft: 60,
          paddingRight: 60,
          color: 'blue',
        }}>
          THE OR-BIT
        </StyledTitle>
        <ImageWrapper>
          <StyledImage src={image1} alt="Image 1" style={{
            borderRadius:10
          }}/>
          <StyledImage src={image2} alt="Image 2" style={{
            borderRadius:10
          }} />
          <StyledImage src={image2} alt="Image 2" style={{
            borderRadius:10
          }} />
          <StyledImage src={image3} alt="Image 3" style={{
            borderRadius:10
          }} />
          <StyledImage src={image4} alt="Image 4" style={{
            borderRadius:10
          }}/>
        </ImageWrapper>
        <StyledTitle style={{
          fontSize: 30,
          paddingLeft: 30,
          paddingRight: 30,
          color: 'violet'
        }}>
          Don't worry , it keeps getting updated on github 
        </StyledTitle>
        <StyledTitle style={{
          fontSize: 20,
          paddingLeft: 30,
          paddingRight: 30,
          color: 'orange'
        }}>
          Download this 8-bit browser for testing and start showing your creativity by adding features and modification. Click the github button for the repository.
        </StyledTitle>
        <StyledTitle style={{
          fontSize: 20,
          paddingLeft: 30,
          paddingRight: 30,
          color: 'red'
        }}>
          (NOTE: IT MAY HAPPEN THAT YOU'VE DOWNLOADED THE OLD VERSION. TO OVERCOME THAT , GO TO MY GITHUB REPO , IT GIVES YOU A STEP BY STEP METHOND TO DEPLOY YOUR OWN BROWSER)
        </StyledTitle>
        
        <StyledTitle style={{
          fontSize: 20,
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 30,
          color: 'blue',
        }}>
          if you want to know how i made the 8-bit thing with the browser, feel free to contact me and make sure to follow my socials. (will help me a lot :(  )
        </StyledTitle>

        {/* Footer section with contact links */}
        <Footer>
          <FooterLink href="https://www.linkedin.com/in/ayaan-adil/" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>
            <img src={linkedinLogo} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
          </FooterLink>
          <FooterLink href="https://www.instagram.com/ayaan_adil/" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>
            <img src={instagramLogo} alt="Instagram" style={{ width: '30px', height: '30px' }} />
          </FooterLink>
          <FooterLink href="mailto:ayaanadil@protonmail.com" style={{ color: 'orange' }}>
            <img src={emailLogo} alt="Email" style={{ width: '30px', height: '30px' }} />
          </FooterLink>
          <FooterLink href="https://www.github.com/ayaanoski" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>
            <img src={github} alt="GitHub" style={{ width: '30px', height: '30px' }} />
          </FooterLink>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
