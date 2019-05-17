import React from "react";

import { useSpring, animated, useTrail } from "react-spring";
import { SwitchIcon, MoonIcon, Ovaltine, HexIcon, MenuIcon } from "./icons";



function Navbar() {
  const [deviceWidth, setWidth] = React.useState(window.innerWidth);
  const [navBg, setNavBg] = React.useState("slategray");
  const [logoLoc, setLogoLoc] = React.useState(20);
  const [burgerLoc, setBurgerLoc] = React.useState(deviceWidth - 70);
  const [burgerX, setBurgerX] = React.useState(1);
  const [switchRotation, setSwitchRotation] = React.useState(1);
  const [logoOneDeg, setLogoOneDeg] = React.useState(35);
  const [logoTwoDeg, setLogoTwoDeg] = React.useState(90);
  const [logoThreeDeg, setLogoThreeDeg] = React.useState(145);
  const [logoAngle, setLogoAngle] = React.useState(0);
  const [inner, setInner] = React.useState(60);
  const [moonColor, setMoonColor] = React.useState("#333");
  const [hexColor, setHexColor] = React.useState("aliceblue");

  const logoProps = useSpring({ left: logoLoc });
  const burgerProps = useSpring({
    left: burgerLoc,
    transform: `scaleX(${burgerX})`
  });
  const switchProps = useSpring({ transform: `rotate(90deg) scaleY(${switchRotation})` });
  const innerProps = useSpring({ transform: `rotate(${inner}deg)` });
  const iconColor = useSpring({ fill: moonColor });
  const navProps = useSpring({ backgroundColor: navBg });
  const hexColorProps = useSpring({ fill: hexColor });

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
    if (logoLoc === 20) {
      setLogoLoc(w - 75);
      setBurgerLoc(25);
      setLogoOneDeg(logoOneDeg + 180);
      setLogoTwoDeg(logoTwoDeg + 180);
      setLogoThreeDeg(logoThreeDeg + 180);
      setLogoAngle(logoAngle + 360);
      setSwitchRotation(-1);
      setBurgerX(-1);
    } else {
      setLogoLoc(20);
      setBurgerLoc(w - 70);
      setLogoOneDeg(logoOneDeg + 180);
      setLogoTwoDeg(logoTwoDeg + 180);
      setLogoThreeDeg(logoThreeDeg + 180);
      setLogoAngle(logoAngle - 360);
      setSwitchRotation(1);
      setBurgerX(1);
    }
  };

  const handleToggleTheme = () => {
    if (moonColor === "#333") {
      setMoonColor("#eee");
      setNavBg("#333");
      setHexColor("dodgerblue");
      setInner(v => v + 180);
      // setLogoTwoDeg(v => v + 360)
    } else {
      setMoonColor("#333");
      setNavBg("slategray");
      setHexColor("aliceblue");
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
      style={Object.assign({}, {
        ...navProps,
        height: 100,
        width: deviceWidth
      })}
    >
      <SwitchIcon // SWITCH
        height={20}
        width={20}
        dw={deviceWidth}
        iconColor={iconColor}
        click={() => handleChangeLocation(deviceWidth)}
        switchProps={switchProps}
      />

      <MoonIcon // MOON
        height={20}
        width={20}
        dw={deviceWidth}
        iconColor={iconColor}
        click={handleToggleTheme}
      />

      <MenuIcon // MENU
        burgerProps={burgerProps}
        iconColor={iconColor}
        height={40}
        width={40}
      />

      <animated.div // LOGO
        style={Object.assign({}, { ...logoProps, top: 25, position: 'absolute' })}
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

        <HexIcon // HEX
          height={15}
          width={15}
          innerProps={innerProps}
          iconColor={hexColorProps}
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
          <code>{`v1.0`}</code>
        </p>
      </div>
    </animated.div>
  );
}

export default Navbar;
