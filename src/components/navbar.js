import React from "react";
// import logo from "../logo.svg";
import Oval from "../assets/oval.svg";
import Swap from "../assets/switch.svg";
import Burger from "../assets/burger.svg";
import Hex from "../assets/hexagons.svg";
import Moon from "../assets/moon.svg";

import { useSpring, animated, useTrail } from "react-spring";

const styles = {
  container: {
    backgroundColor: "slategray",
    height: 100
  },
  items: {
    position: "absolute"
  },
  oval: {
    position: "absolute"
  }
};
function Navbar() {
  const [deviceWidth, setWidth] = React.useState(window.innerWidth);
  const [logoLoc, setLogoLoc] = React.useState(20);
  const [burgerLoc, setBurgerLoc] = React.useState(deviceWidth - 75);
  const [switchRotation, setSwitchRotation] = React.useState(90);
  const [logoOneDeg, setLogoOneDeg] = React.useState(35);
  const [logoTwoDeg, setLogoTwoDeg] = React.useState(90);
  const [logoThreeDeg, setLogoThreeDeg] = React.useState(145);
  const [logoAngle, setLogoAngle] = React.useState(0);
  const [inner, setInner] = React.useState(60);
  const [moonColor, setMoonColor] = React.useState("#333");
  const [nightToggle, setNightToggle] = React.useState(true);

  const logoProps = useSpring({ left: logoLoc });
  const burgerProps = useSpring({ left: burgerLoc });
  const switchProps = useSpring({ transform: `rotate(${switchRotation}deg)` });
  const logoRotationProps = useSpring({ transform: `rotate(${logoAngle}deg)` });
  const innerProps = useSpring({ transform: `rotate(${inner}deg)` });
  const moonProps = useSpring({fill: moonColor});

  const logoItems = [Oval, Oval, Oval];
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(logoItems.length, {
    config,
    // r: logoOneDeg === 0 ? 180 : 0,
    transform: `rotate(180deg)`,
    opacity: logoOneDeg === 35 ? 1 : 1,
    from: { opacity: 0, transform: `rotate(0deg)` }
  });

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
      setInner(v => v + 180);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => {
      setInner(v => 60);
    }, 15500);

    return () => clearInterval(id);
  }, []);

  const handleChangeLocation = w => {
    // return logoLoc === 0 ? setLogoLoc(width - 75) : setLogoLoc(0);
    if (logoLoc === 20) {
      setLogoLoc(w - 75);
      setBurgerLoc(20);
      setLogoOneDeg(logoOneDeg + 180);
      setLogoTwoDeg(logoTwoDeg + 180);
      setLogoThreeDeg(logoThreeDeg + 180);
      setLogoAngle(logoAngle + 360);
      setSwitchRotation(switchRotation + 180);
    } else {
      setLogoLoc(20);
      setBurgerLoc(w - 75);
      setLogoOneDeg(logoOneDeg + 180);
      setLogoTwoDeg(logoTwoDeg + 180);
      setLogoThreeDeg(logoThreeDeg + 180);
      setLogoAngle(logoAngle - 360);
      setSwitchRotation(switchRotation - 180);
    }
  };

  const handleToggleTheme = () => {
    moonColor === '#333' ? setMoonColor('#eee') : setMoonColor('#333')
    // console.log(moonColor)
  };

  const handleRotation = index => {
    switch (index) {
      case 0:
        return `rotate(${logoOneDeg + 180}deg)`;
      case 1:
        return `rotate(${logoTwoDeg}deg)`;
      case 2:
        return `rotate(${logoThreeDeg}deg)`;
      default:
        return 0;
    }
  };

  const MoonIcon = props => {
    // const { width, height } = props;
    return (
      <>

        <animated.svg
          {...moonProps}
          onClick={() => handleToggleTheme()}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 129 129"
          width={props.width}
          height={props.height}
          style={Object.assign({}, styles.items, {
            left: deviceWidth - 165,
            top: 38,
            cursor: "pointer",
            
          })}
        >
          <g>
            <path d="m108.8,27.1c1.6-0.2 2.9-1.4 3.3-3 0.4-1.5-0.1-3.2-1.3-4.2-10.4-8.8-23.7-13.7-37.4-13.7-32.1,8.88178e-16-58.3,26.1-58.3,58.3s26.1,58.3 58.3,58.3c14.4,0 28.3-5.4 39.1-15.1 1.2-1.1 1.6-2.8 1.2-4.3s-1.8-2.6-3.4-2.8c-18.6-2.2-32.7-18-32.7-36.8-0.1-18.5 13.1-33.9 31.2-36.7zm-39.5,36.6c0,19.8 12.8,36.9 31,43-8,5.1-17.3,7.9-26.9,7.9-27.6,0-50-22.5-50-50s22.5-50 50-50c8.9,0 17.6,2.4 25.2,6.8-17.4,6.4-29.3,23-29.3,42.3z" />
          </g>
        </animated.svg>

      </>
    );
  };

  return (
    <div style={Object.assign({}, styles.container, { width: deviceWidth })}>
      <animated.img // Switch
        onClick={() => handleChangeLocation(deviceWidth)}
        src={Swap}
        alt="swap-svg"
        height={20}
        style={Object.assign({}, styles.items, {
          left: deviceWidth - 120,
          top: 38,
          cursor: "pointer",
          ...switchProps
        })}
      />

      <MoonIcon height={20} width={20}/>

      
      <animated.img // Burger
        src={Burger}
        height={50}
        alt="burger-svg"
        style={Object.assign({}, styles.items, {
          ...burgerProps,
          top: 25
        })}
      />
      <animated.div
        style={Object.assign({}, styles.items, { ...logoProps, top: 25 })}
      >
        {trail.map(({ opacity }, index) => (
          <animated.img // Logo
            key={index}
            src={logoItems[index]}
            height={50}
            alt="Logo"
            style={Object.assign({}, styles.oval, {
              opacity,
              transform: handleRotation(index)
            })}
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

      <div
        style={{
          border: "0px solid red",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <p
          style={{
            fontSize: "9px",
            position: "absolute",
            top: window.innerHeight - 100
          }}
        >
          <code>v1.0 </code>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
