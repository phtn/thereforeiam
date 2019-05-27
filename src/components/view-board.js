import React from 'react'
import ButtonOne from './btn-one';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid gray',
    color: 'lightgray',
    height: 400
  }
}

const ViewBoard = props => {

  const { width, height } = props

  const [count, setCount] = React.useState(0)

  function press(){
    setCount(count + 1)
  }

  return (
    <div style={styles.container}>
      <ButtonOne name={count} press={press} width={width} height={height} />
      {/* // <button onPointerDown={press}>{count}</button> */}
    </div>
  )
}

export default ViewBoard