import React from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const Container = styled.div`
margin: 4rem;
`;



const MovieList = ()=>{
    const movie = [
        { trailer: "https://app.sipconsult.net/afrowatch/EXTRACTION%202%20_%20Official%20Trailer%20_%20Netflix.mp4",
          picture: "picture1.png",
          title: "title1",
          year : 2010,
          id: 1
        },
        { trailer: "https://app.sipconsult.net/afrowatch/John%20Wick_%20Chapter%204%20(2023%20Movie)%20Official%20Trailer%20%E2%80%93%20Keanu%20Reeves,%20Donnie%20Yen,%20Bill%20Skarsg%C3%A5rd.mp4",
          picture: "picture2.png",
          title: "title2",
          year : 2011,
          id: 2
        },
        { trailer: "https://app.sipconsult.net/afrowatch/The%20Creator%20_%20Official%20Trailer.mp4",
          picture: "picture3.png",
          title: "title3",
          year : 2013,
          id: 3
        },
        { trailer: "https://app.sipconsult.net/afrowatch/EXPEND4BLES%20(2023)%20Official%20Trailer%20-%20Jason%20Statham,%2050%20Cent,%20Megan%20Fox,%20Dolph%20Lundgren.mp4",
          picture: "picture4.png",
          title: "title4",
          year : 2011,
          id: 4
        }
]
    return (
        <Container>
          {movie.map((item)=>(
            <MovieCard trailer={item.trailer} picture = {item.picture} title={item.title} year={item.year} key ={item.id}/>
          ))}
        </Container>
      
    )
}


export default MovieList;