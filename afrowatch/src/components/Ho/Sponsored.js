import React from 'react';
import styled from 'styled-components';

const Sponsor = styled.div`
display: flex;
height: 25rem;
width: 100%;
background-color:rgba(118,184,82,1);
  img {
    width:33%;
    height: 100%;
    border: none;
  }
  .above {
    color: white;
    height: 100%;
    width: 33%;
    border-right: none;
    background-color: rgba(146,104,76,0.9);
  }
`;

const Sponsored = ()=>{
    const sponsoredMovie = { trailer: "https://app.sipconsult.net/afrowatch/EXPEND4BLES%20(2023)%20Official%20Trailer%20-%20Jason%20Statham,%2050%20Cent,%20Megan%20Fox,%20Dolph%20Lundgren.mp4",
    picture: "/workspaces/Afrawatch_client/afrowatch/src/mandala.png",
    title: "title4",
    year : 2011,
    genre: "action",
    description: "lorem ipsum",
    id: 4
  }
    return (
    <Sponsor>
      <img src={Sponsored.picture} alt="sponsored movie"/>
      <div className='above'>
      <h2>title: {sponsoredMovie.title}</h2>
      <p>description: {sponsoredMovie.description}</p>
      <span>genre : {sponsoredMovie.genre}</span>
      <span>year: {sponsoredMovie.year}</span>
      <button>Play</button>
      <button>Info</button>
      </div>
      <video>
      <source src={sponsoredMovie.trailer} type="video/mp4" />
      </video>
      
    </Sponsor >
    )
}

export default Sponsored;