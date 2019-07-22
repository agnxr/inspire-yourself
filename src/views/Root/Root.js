import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import ImagesView from '../ImagesView/ImagesView';
import FontsView from '../FontsView/FontsView';
import VideosView from '../VideosView/VideosView';
import ColorsView from '../ColorsView/ColorsView';
import Navigation from '../../components/Navigation/Navigation';
import video from '../../assets/blue.mp4';
import logo from '../../assets/logo.svg';
import pointer from '../../assets/pointer.svg';
import background from '../../assets/fallback.png';

const StyledHeader = styled.header`
    width: 100%;
    height: 520px;
    overflow:hidden;
    background-color: #000;
    background-image: url(${background});
    animation: slidein 1.5s ease-out;

    @keyframes slidein {
      0%{ opacity:0; }
      100%{ opacity:1; }
    }
`;

const StyledContent = styled.div`
  height: 480px;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-weight: 300;
  position: absolute;
  h1 {
    font-size: 40px;
  }
`;

const StyledBar = styled.section`
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 3px;
  font-size: 13px;
`;

const StyledLogo = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin: 0 20px;
`;

const StyledLink = styled(Link)`
  z-index: 10001;
  margin-top: 40px;
  animation: bounce 3s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

const StyledCategories = styled.section`
  border-top: 3px solid ${({theme}) => theme.violet400};
  background-color: #fff;
  padding: 20px;
  letter-spacing: 3px;
  color: ${({theme}) => theme.violet400};
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

class Root extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <StyledHeader>
              <section>
                <StyledBar>
                  <a href="/"><StyledLogo src={logo} alt="vvave"/></a>
                  <p>vvave | Inspire yourself | Everything you need in one place</p>
                </StyledBar>
                <StyledContent>
                  <h1>Find materials for your project</h1>
                  <p>everything you need in one place</p>
                  <StyledLink to="/#navigation"><img width="40" height="40" alt="" src={pointer}/></StyledLink>
                </StyledContent>
                <video autoplay="autoplay" muted="muted" loop="loop" width="100%">
                  <source src={video} type="video/mp4"/>
                  <img src={background} title="Your browser does not support the <video> tag" />
                </video>
              </section>
            </StyledHeader>
            <StyledCategories>
              <p id="navigation">Search in categories:</p>
              <Navigation/>
            </StyledCategories>
            <Switch>
              <Route exact path="/" component={ImagesView}/>
              <Route exact path="/fonts" component={FontsView}/>
              <Route exact path="/videos" component={VideosView}/>
              <Route exact path="/colors" component={ColorsView}/>
            </Switch>
            <StyledBar>
                  <a href="/"><StyledLogo src={logo} alt="vvave"/></a>
                  <p>2019 © vvave | Inspire yourself | Everything you need in one place</p>
            </StyledBar>
          </>
        </ThemeProvider>
      </BrowserRouter>
    )
  };
}

export default Root;
