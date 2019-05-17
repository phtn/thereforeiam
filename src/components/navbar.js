import React from "react";
import Burger from "../assets/burger.svg";
import Hex from "../assets/hexagons.svg";

import { useSpring, animated, useTrail } from "react-spring";
import { SwitchIcon, MoonIcon, Ovaltine, HexIcon, MenuIcon } from "./icons";

const styles = {
  container: {
    // backgroundColor: "slategray",
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
  const [navBg, setNavBg] = React.useState("slategray");
  const [logoLoc, setLogoLoc] = React.useState(20);
  const [burgerLoc, setBurgerLoc] = React.useState(deviceWidth - 70);
  const [switchRotation, setSwitchRotation] = React.useState(90);
  const [logoOneDeg, setLogoOneDeg] = React.useState(35);
  const [logoTwoDeg, setLogoTwoDeg] = React.useState(90);
  const [logoThreeDeg, setLogoThreeDeg] = React.useState(145);
  const [logoAngle, setLogoAngle] = React.useState(0);
  const [inner, setInner] = React.useState(60);
  const [moonColor, setMoonColor] = React.useState("#333");
  const [hexColor, setHexColor] = React.useState('aliceblue')

  const logoProps = useSpring({ left: logoLoc });
  const burgerProps = useSpring({ left: burgerLoc });
  const switchProps = useSpring({ transform: `rotate(${switchRotation}deg)` });
  // const logoRotationProps = useSpring({ transform: `rotate(${logoAngle}deg)` });
  const innerProps = useSpring({ transform: `rotate(${inner}deg)` });
  const iconColor = useSpring({ fill: moonColor });
  const navProps = useSpring({ backgroundColor: navBg });
  const hexColorProps = useSpring({ fill: hexColor})
  const logoOneProps = useSpring({ transform: `rotate(${logoOneDeg}deg)`})

  const logoItems = [Ovaltine, Ovaltine, Ovaltine];
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(logoItems.length, {
    config,
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
      setBurgerLoc(w - 70);
      setLogoOneDeg(logoOneDeg + 180);
      setLogoTwoDeg(logoTwoDeg + 180);
      setLogoThreeDeg(logoThreeDeg + 180);
      setLogoAngle(logoAngle - 360);
      setSwitchRotation(switchRotation - 180);
    }
  };

  const handleToggleTheme = () => {
    if (moonColor === "#333") {
      setMoonColor("#eee");
      setNavBg("#333");
      setHexColor("dodgerblue")
      setInner(v => v + 180)
      // setLogoTwoDeg(v => v + 360)
    } else {
      setMoonColor("#333");
      setNavBg("slategray");
      setHexColor('aliceblue')
      setInner(v => v - 180)
    }
    // console.log(moonColor)
  };

  const handleRotation = index => {
    switch (index) {
      case 0:
        return `rotate(${logoOneDeg}deg)`;
      case 1:
        return `rotate(${logoTwoDeg}deg)`;
      case 2:
        return `rotate(${logoThreeDeg}deg)`;
      default:
        return 0;
    }
  };

  return (
    <animated.div
      style={Object.assign({}, styles.container, {
        ...navProps,
        width: deviceWidth
      })}
    >
      <SwitchIcon
        height={20}
        width={20}
        dw={deviceWidth}
        iconColor={iconColor}
        click={() => handleChangeLocation(deviceWidth)}
        switchProps={switchProps}
      />

      <MoonIcon
        height={20}
        width={20}
        dw={deviceWidth}
        iconColor={iconColor}
        click={handleToggleTheme}
      />



      <MenuIcon burgerProps={burgerProps} iconColor={iconColor} height={40} width={40} />

      <animated.div // LOGO
        style={Object.assign({}, styles.items, { ...logoProps, top: 25 })}
      >
        {trail.map(({ opacity }, index) => (
          <Ovaltine
            key={index}
            height={50}
            width={50}
            iconColor={iconColor}
            opacity={opacity}
            rotation={handleRotation(index)}
          />
        ))}


        <HexIcon height={15} width={15} innerProps={innerProps} iconColor={hexColorProps} />

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
    </animated.div>
  );
}

export default Navbar;
