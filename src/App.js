import React from 'react';

import Dog from './components/Dogs';
import './styles.css';
import styled from 'styled-components';

const Container = styled.div`
background-color: palevioletred;
width: 60%;
box-shadow: 5px 5px 15px 5px #000000;
`;

const Header = styled.header`
background-color: #FAD7A0;
border-radius: 40px 0px 40px 0px;
`;



const Title = styled.h1`
color: rgba(0,0,0,.6);
text-shadow: 3px 2px 3px rgba(255,255,255,.2);
font-size: 5em;
text-align: center;
color: 333333;
margin: 4%;
font-weight: 700;
`;

const Footer = styled.footer`
background-color: #FAD7A0;
border-radius: 0px 40px 0px 40px;`;


function App() {
  return (
    <Container className="App">
      <Header>
      <Title>Get a DoG</Title>
      </Header>
      <Dog />
      <Footer>
        <Title>Dog Breed</Title>
      </Footer>
    </Container>
  );
}

export default App;