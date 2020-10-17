import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

class App extends React.Component {
  
  state = {
    input: ''
  }


  render() {
    return (
      <main className="App">
        {/* <Header /> */}
        <Navbar />
      </main>
    );
  }
}

export default App;
