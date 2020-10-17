import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Projects.css';


const Projects = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    

    return (
        <animated.div className="projects" style={props}>
            <h2>Projects</h2>
        </animated.div>
    )
}

export default Projects;