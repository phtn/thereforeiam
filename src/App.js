import React from 'react';
import Navbar from './components/navbar'
// import { observer } from 'mobx'

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const styles = {
  container: {
    height: HEIGHT,
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777'
  },
  header: {
    textAlign: 'center',
    height: 200,
    display: 'flex',
    alignItems: 'center',
  }
}




function App(){
  // eslint-disable-next-line
  const [bg, setBG] = React.useState(window.localStorage.getItem('bg'))
  
  
  return (
    <div style={Object.assign({}, styles.container, {backgroundColor: bg})}>
        <Navbar width={WIDTH} height={HEIGHT} />
    </div>
  );
}

export default App;
