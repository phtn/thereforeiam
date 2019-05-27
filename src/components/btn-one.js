import React from 'react'

import { Burst, Timeline } from 'mo-js'

// console.log(Shape)

const styles = {
  container: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: 'tomato',
    border: 'none'
  }
}

// console.log(document.getElementById('button').getBoundingClientRect().top)

const ButtonOne = props => {

  const { name, width, height, press } = props

  const [ btnpos, setBtnpos ] = React.useState(height)
  // const btnRef = React.useRef(null)


  const rightTap = new Burst({
    radius: {30:90},
    count: 4,
    angle: 45,
    children: {
      shape: 'polygon',
      fill: 'none',
      radiusY: {0:[-3, 1]},
      points: 5,
      stroke: {'mintcream':'tomato'},
      strokeWidth: 5,
      opacity: {1: 0},
      angle: 90,
    },
    left: width/2,
    top: btnpos === height ? height / 2.5 : btnpos,
    duration: 2000,
  })

  const burst = (e) => {
    // eslint-disable-next-line
    const timeline = new Timeline({}).add(rightTap).play()

    console.log(e.clientY)

    setBtnpos(e.clientY)



    // const btnPosition = document.getElementById('button').getBoundingClientRect().top
    // console.log(btnPosition)
  }




  return (
    <button id={'button'} onPointerDown={press} onClick={burst} style={styles.container}>{name}</button>
  )
}
export default ButtonOne