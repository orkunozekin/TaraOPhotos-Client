import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
import { useSpring } from 'react-spring';
import H2 from '../Header/H2';

const App = () => {


  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  console.log(props);
  return (

    <main className="App" style={props}>
      {/* <Header /> */}
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/projects' component={Projects} />
     
    </main>
  );
}


export default App;
