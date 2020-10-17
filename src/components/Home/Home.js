import React, { useState } from 'react';
import './Home.css';
import { useTransition, animated, useSpring } from 'react-spring';
import H2 from '../Header/H2';

const Home = () => {

    

    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    // const items = ['T', 'A', 'R', 'A', ' ', 'O', ' ', 'P', 'H', 'O', 'T', 'O', 'S'];

    return (
        <animated.div className="home" style={style}>
            <h1>Welcome To...</h1>
            <H2 />
        </animated.div >
    )
}

export default Home;