import React from 'react';
import styled from 'styled-components';

const Sponsor = styled.div``;

const Sponsored = ({picture, trailer, title, year})=>{

    return (
        <Sponsor>

        <video width="320" height="240" controls>
          <source src={trailer} type="video/mp4" />
        </video>
      
      <h2>{title}</h2>
      <h3>{year}</h3>
    </Sponsor >
    )
}

export default Sponsored;