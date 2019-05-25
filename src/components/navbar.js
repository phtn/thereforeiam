import React from "react";

import { useSpring, animated } from "react-spring";
import { SwitchIcon, MoonIcon, Astronaut, Satellite } from "./icons";

function Navbar(props) {
  const { width } = props;
  const [deviceWidth, setWidth] = React.useState(width);
  const [navBg, setNavBg] = React.useState("dodgerblue");
  const [logoLoc, setLogoLoc] = React.useState(20);
  const [switchRotation, setSwitchRotation] = React.useState(1);
  const [logoAngle, setLogoAngle] = React.useState(0);
  const [moonColor, setMoonColor] = React.useState("mintcream");

  const logoProps = useSpring({
    left: logoLoc !== 20 ? deviceWidth - 65 : 20,
    transform: logoLoc !== 20 ? `rotate(${logoAngle}deg)` : `rotate(0deg)`
  });
  const burgerProps = useSpring({
    left: logoLoc !== 20 ? 20 : deviceWidth - 65,
    transform: logoLoc !== 20 ? `rotate(${logoAngle}deg)` : `rotate(-15deg)`
  });
  const switchProps = useSpring({
    transform: `rotate(90deg) scaleY(${switchRotation})`
  });
  const iconColor = useSpring({ fill: moonColor });
  const navProps = useSpring({ backgroundColor: navBg });

 

  React.useEffect(() => {
    function handleWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  

  const handleChangeLocation = w => {
    if (logoLoc === 20) {
      setLogoLoc(w - 75);
      setLogoAngle(logoAngle + 30);
      setSwitchRotation(-1);
    } else {
      setLogoLoc(20);
      setLogoAngle(logoAngle - 30);
      setSwitchRotation(1);
    }
  };

  const handleToggleTheme = () => {
    if (moonColor === "mintcream") {
      setMoonColor("#eee");
      setNavBg("#333");
      window.localStorage.setItem('bg', 'black')
    } else {
      setMoonColor("mintcream");
      setNavBg("dodgerblue");
      window.localStorage.setItem('bg', 'lightgray')
      
    }
  };


  return (
    <animated.div // CONTAINER
      style={Object.assign(
        {},
        {
          ...navProps,
          height: 70,
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

      <Satellite // MENU
        burgerProps={burgerProps}
        iconColor={iconColor}
        height={40}
        width={40}
        dw={deviceWidth}
        loc={logoLoc}
      />

      <animated.div // LOGO
        style={Object.assign({}, { position: "absolute" })}
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
