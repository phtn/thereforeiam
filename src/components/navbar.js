import React from "react";
// import logo from "../logo.svg";
import Oval from '../assets/oval.svg'
import Swap from "../assets/switch.svg";
import Burger from '../assets/burger.svg'
import Hex from '../assets/hexagons.svg'

import { useSpring, animated, useTrail } from 'react-spring'

const styles = {
  container: {
    backgroundColor: "slategray",
    height: 100
  },
  items: {
    position: "absolute"
  },
  oval: {
    position: 'absolute'
  }
};
function Navbar() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [logoLoc, setLogoLoc] = React.useState(20);
  const [burgerLoc, setBurgerLoc] = React.useState(width - 75);
  const [switchRotation, setSwitchRotation] = React.useState(90)
  const [logoOneDeg, setLogoOneDeg] = React.useState(35)
  const [logoTwoDeg, setLogoTwoDeg] = React.useState(90)
  const [logoThreeDeg, setLogoThreeDeg] = React.useState(145)
  const [logoAngle, setLogoAngle] = React.useState(0)
  const [ inner, setInner] = React.useState(60) 
  
  const logoProps = useSpring({left: logoLoc})
  const burgerProps = useSpring({left: burgerLoc})
  const switchProps = useSpring({transform: `rotate(${switchRotation}deg)`})
  const logoRotationProps = useSpring({ transform: `rotate(${logoAngle}deg)`})
  const innerProps = useSpring({transform: `rotate(${inner}deg)`})

  const logoItems = [Oval, Oval, Oval]
  const config = { mass: 5, tension: 2000, friction: 200 }
  const trail = useTrail(logoItems.length, {
    config,
    // r: logoOneDeg === 0 ? 180 : 0,
    transform: `rotate(180deg)`,
    opacity: logoOneDeg === 35 ? 1 : 1,
    from: { opacity: 0, transform: `rotate(0deg)` }
  })


  React.useEffect(() => {
    function handleWidth() {
      setWidth(window.innerWidth);
      // handleChangeLocation(width)
    }
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => {
      setInner(v => v + 180)
    }, 3000)

    return () => clearInterval(id)
  }, [])

  React.useEffect(() => {
    const id = setInterval(() => {
      setInner(v => 60)
    }, 15500)

    return () => clearInterval(id)
  }, [])

  const handleChangeLocation = (w) => {
    // return logoLoc === 0 ? setLogoLoc(width - 75) : setLogoLoc(0);
    if (logoLoc === 20){
      setLogoLoc(w - 75)
      setBurgerLoc(20)
      setLogoOneDeg(logoOneDeg + 180)
      setLogoTwoDeg(logoTwoDeg + 180)
      setLogoThreeDeg(logoThreeDeg + 180)
      setLogoAngle(logoAngle + 360)
      setSwitchRotation(switchRotation + 180)
    } else {
      setLogoLoc(20)
      setBurgerLoc(w - 75)
      setLogoOneDeg(logoOneDeg + 180)
      setLogoTwoDeg(logoTwoDeg + 180)
      setLogoThreeDeg(logoThreeDeg + 180)
      setLogoAngle(logoAngle - 360)
      setSwitchRotation(switchRotation - 180)
    }
    
  };
  
  const handleRotation = index => {
    switch(index){
      case 0: return `rotate(${logoOneDeg + 180}deg)`
      case 1: return `rotate(${logoTwoDeg}deg)`
      case 2: return `rotate(${logoThreeDeg}deg)`
      default: return 0
    }
  }

  return (
    <div style={Object.assign({}, styles.container, { width: width })}>
      <animated.img // Switch
        onClick={() => handleChangeLocation(width)}
        src={Swap}
        alt="swap-svg"
        height={20}
        style={Object.assign({}, styles.items, {
          left: width - 130,
          top: 38,
          ...switchProps,
        })}
      />
      <animated.img // Burger
        src={Burger}
        height={50}
        alt="burger-svg"
        style={Object.assign({}, styles.items, {
          ...burgerProps,
          top: 25,
        })}
      />
      <animated.div style={Object.assign({}, styles.items, { ...logoProps, top: 25, ...logoRotationProps })}>

        {trail.map(({ opacity }, index) => (
          <animated.img // Logo
            key={index}
            src={logoItems[index]}
            height={50}
            alt="Logo"
            style={Object.assign({}, styles.oval, { opacity, transform: handleRotation(index) })}
          />
        ))}

        <animated.img // Inner
          src={Hex}
          alt="bracket-svg"
          height={15}
          style={Object.assign({}, styles.oval, {
            left: 18,
            top: 18,
            ...innerProps
          })}
        />
        
      </animated.div>

      <div style={{ border: "0px solid red", display: "flex", justifyContent: 'center' }}>
        <p style={{fontSize: '9px', position: 'absolute', top: window.innerHeight - 100}}>
          <code>v1.0 </code>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
