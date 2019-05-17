import React, { Component } from 'react';
import Navbar from './components/navbar'

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
  header: {
    textAlign: 'center',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center'
  }
}
class App extends Component {
  render() {
    return (
      <div style={styles.container}>
          <Navbar />
      </div>
    );
  }
}

export default App;
