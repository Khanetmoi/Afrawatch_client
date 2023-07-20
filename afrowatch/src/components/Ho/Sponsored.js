import React from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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

const SCard = styled.div`

`;

const Sponsored = ()=>{
const sponsoredMovies = [{
  poster: "./first.jpeg",
  title: "undestructible",
  year: 2023,
  time: 90,
},
{
  poster: "./first.jpeg",
  title: "understandable",
  year: 2023,
  time: 90,
},
{
  poster: "./first.jpeg",
  title: "undesconstructable",
  year: 2023,
  time: 90,
},
{
  poster: "./first.jpeg",
  title: "unfantomable",
  year: 2023,
  time: 90,
},
{
  poster: "./first.jpeg",
  title: "irepressible",
  year: 2023,
  time: 90,
},
{
  poster: "./first.jpeg",
  title: "Govinda",
  year: 2023,
  time: 90,
}
]

  return (
    <Sponsored>
    <Splide options={ { rewind: true } } aria-label="React Splide Example">
    <SplideSlide>
     {
      sponsoredMovies.map(()=>{
        <SCard>
          <div>
            <img src={sponsoredMovies.poster}/>
            <button>Play</button>
          </div>
          <h2>{sponsoredMovies.title}</h2>
          <h3>{sponsoredMovies.year} . {sponsoredMovies.time} mn</h3>
        </SCard>
      })
     }
    </SplideSlide>
    </Splide>
    </Sponsored >
    
  )
}

export default Sponsored;