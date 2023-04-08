import React from 'react';
import { connect } from 'react-redux';
import { getDog } from '../actions';
import styled from 'styled-components';



const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
`;
const H2 = styled.h2`
width: auto;
border: 2px solid;
background-color: #D35400; 
width: 50%;
margin: 0px auto;`;


const Img = styled.img`
width: 40%;
border: 4px solid;
`;

// https://dog.ceo/api/breeds/image/random

const Dog = (props) => {
  
  if (props.isFetching) {
    return <h2>Fetching DOG for ya!</h2>;
  }

  const breed = props.message.split('/')[4].toUpperCase();

  return (
    <>
      <div>
        <H2>BREED: {breed}</H2>
        <Img src={props.message} alt="Dog"/>
      </div>
      
      <Button onClick={()=>props.getDog()}>Get new Dog</Button>
      {console.log("Props.message", props.message)}
      
    </>
  );
};

const mapStateToProps = state => {
  console.log("STATE:",state.message);
  return {
  message : state.message,
  status: state.status,
  isFetching: state.isFetching
    };
};

export default connect(mapStateToProps, {getDog})(Dog); 