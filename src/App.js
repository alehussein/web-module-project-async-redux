import React from 'react';

import Dog from './components/Dogs';
import './styles.css';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 5em;
text-align: center;
color: palevioletred;
margin: 4%;
font-weight: 700;
`;



function App() {
  return (
    <div className="App">
      <Title>Get a DoG</Title>
      <Dog />
    </div>
  );
}

export default App;