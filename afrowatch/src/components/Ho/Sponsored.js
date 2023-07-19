import React from 'react';
import styled from 'styled-components';

const Sponsor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18rem;
  margin-block: 1rem;

  video {
    height: 100%;
    width: 100%;
    border: 2px solid black;
  }
`;

const Sponsored = ({picture, trailer, title, year})=>{

  return (
    <Sponsor>
      <video controls>
        <source src={trailer} type="video/mp4" />
      </video>
      
      <h2>{title}</h2>
      <h3>{year}</h3>
    </Sponsor >
  )
}

export default Sponsored;