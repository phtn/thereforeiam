import React from "react";

import { useSpring, animated, useTrail } from "react-spring";
import { SwitchIcon, MoonIcon, Astronaut, MenuIcon, Sputnik } from "./icons";

function Navbar(props) {
  const { width, height } = props;
  const [deviceWidth, setWidth] = React.useState(width);
  const [navBg, setNavBg] = React.useState("mintcream");
  const [logoLoc, setLogoLoc] = React.useState(20);
  const [burgerLoc, setBurgerLoc] = React.useState(width - 70);
  const [burgerX, setBurgerX] = React.useState(1);
  const [switchRotation, setSwitchRotation] = React.useState(1);
  const [logoOneDeg, setLogoOneDeg] = React.useState(35);
  const [logoTwoDeg, setLogoTwoDeg] = React.useState(90);
  const [logoThreeDeg, setLogoThreeDeg] = React.useState(145);
  const [logoAngle, setLogoAngle] = React.useState(0);
  const [inner, setInner] = React.useState(60);
  const [moonColor, setMoonColor] = React.useState("dodgerblue");
  const [hexColor, setHexColor] = React.useState("lightgray");

  const logoProps = useSpring({
    left: logoLoc !== 20 ? deviceWidth - 65 : 20,
    transform: logoLoc !== 20 ? `rotate(420deg)` : `rotate(0deg)`
  });
  const burgerProps = useSpring({
    // left: burgerLoc,
    left: logoLoc !== 20 ? 20 : deviceWidth - 65,
    transform: logoLoc !== 20 ? `rotate(-420deg)` : `rotate(-15deg)`
  });
  const switchProps = useSpring({
    transform: `rotate(90deg) scaleY(${switchRotation})`
  });
  // const innerProps = useSpring({ transform: `rotate(${inner}deg)` });
  const iconColor = useSpring({ fill: moonColor });
  const navProps = useSpring({ backgroundColor: navBg });
  // const hexColorProps = useSpring({ fill: hexColor });

  const logoItems = [Astronaut];
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

  const checkWindowSize = w => {
    console.log(w);
  };

  const handleChangeLocation = w => {
    if (logoLoc === 20) {
      setLogoLoc(w - 75);
      setBurgerLoc(25);
      // setLogoOneDeg(logoOneDeg + 180);
      // setLogoTwoDeg(logoTwoDeg + 180);
      // setLogoThreeDeg(logoThreeDeg + 180);
      setLogoAngle(logoAngle + 360);
      setSwitchRotation(-1);
      setBurgerX(-1);
    } else {
      setLogoLoc(20);
      setBurgerLoc(0);
      setLogoOneDeg(logoOneDeg + 180);
      setLogoTwoDeg(logoTwoDeg + 180);
      setLogoThreeDeg(logoThreeDeg + 180);
      setLogoAngle(logoAngle - 360);
      setSwitchRotation(1);
      setBurgerX(1);
    }
  };

  const handleToggleTheme = () => {
    if (moonColor === "dodgerblue") {
      setMoonColor("#eee");
      setNavBg("#333");
      setHexColor("dodgerblue");
      setInner(v => v + 180);
      // setLogoTwoDeg(v => v + 360)
    } else {
      setMoonColor("dodgerblue");
      setNavBg("mintcream");
      setHexColor("lightgray");
      setInner(v => v - 180);
    }
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
    <animated.div // CONTAINER
      style={Object.assign(
        {},
        {
          ...navProps,
          height: 80,
          width: deviceWidth
        }
      )}
    >
      <SwitchIcon // SWITCH
        height={18}
        width={18}
        dw={deviceWidth}
        iconColor={iconColor}
        click={() => handleChangeLocation(deviceWidth)}
        switchProps={switchProps}
      />

      <MoonIcon // MOON
        height={18}
        width={18}
        dw={deviceWidth}
        iconColor={iconColor}
        click={handleToggleTheme}
      />

      <Sputnik // MENU
        burgerProps={burgerProps}
        iconColor={iconColor}
        height={40}
        width={40}
        dw={deviceWidth}
        loc={logoLoc}
      />

      <animated.div // LOGO
        style={Object.assign({}, { top: 25, position: "absolute" })}
      >
        <Astronaut
          height={40}
          width={40}
          iconColor={iconColor}
          // rotation={handleRotation(index)}
          logoProps={logoProps}
          // burgerProps={burgerProps}
          dw={deviceWidth} // 😴😴😴😴😴😴😴😴😴😴😴😴
          loc={logoLoc}
        />

        {/* <HexIcon // HEX
          height={15}
          width={15}
          innerProps={innerProps}
          iconColor={hexColorProps}

          dw={deviceWidth} // 😴😴😴😴😴😴😴😴😴😴😴
          loc={logoLoc}


        /> */}
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
          <code>
            {`v1.0`} {deviceWidth} - {logoLoc}{" "}
          </code>
        </p>
      </div>
    </animated.div>
  );
}

export default Navbar;
