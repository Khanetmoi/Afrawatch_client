import React from 'react';
import NavBar from '../components/Ho/navBar';
import Sponsored from '../components/Ho/Sponsored';
import MovieList from '../components/Ho/MovieList'

const Home = ()=>{
    return (
        <>
        <NavBar/>
        <Sponsored/>
        <MovieList/>
        <div>footer</div>
        </>
    )
}

export default Home;