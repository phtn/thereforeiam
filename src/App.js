import React, { Component } from 'react';
import Navbar from './components/navbar'

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee'
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
          <Navbar width={WIDTH} height={HEIGHT} />
      </div>
    );
  }
}

export default App;
