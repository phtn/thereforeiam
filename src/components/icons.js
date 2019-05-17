import React from 'react'
import { animated } from 'react-spring'


export const MoonIcon = props => {
  return (
    <>

      <animated.svg
        {...props.iconColor}
        onClick={props.click}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 129 129"
        width={props.width}
        height={props.height}
        style={Object.assign({}, {
          position: 'absolute',
          left: props.dw - 165,
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

export const SwitchIcon = props => {
  return (
    <>

      <animated.svg
        {...props.iconColor}
        onClick={props.click}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 489.3 489.3"
        width={props.width}
        height={props.height}
        style={Object.assign({}, {
          position: 'absolute',
          left: props.dw - 120,
          top: 38,
          cursor: "pointer",
          ...props.switchProps
        })}
      >
        <g>
          <g>
            <path d="M119,468.85V50.05l73.6,73.6c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-94.5-94.5
              c-4.6-4.6-12.7-4.6-17.3,0l-94.6,94.5c-4.8,4.8-4.8,12.5,0,17.3c4.8,4.8,12.5,4.8,17.3,0l73.6-73.6v418.8
              c0,6.8,5.5,12.3,12.3,12.3C113.5,481.05,119,475.55,119,468.85z"/>
            <path d="M373.8,477.45c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l94.5-94.5c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-73.6,73.6
              V20.45c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v418.8l-73.5-73.6c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3L373.8,477.45z"
              />
          </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </animated.svg>

    </>
  );
};

export const Ovaltine = props => {
  return (
    <>

      <animated.svg
        {...props.iconColor}
        onClick={props.click}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width={props.width}
        height={props.height}
        style={Object.assign({}, {
          position: 'absolute',
          // left: props.dw - 165,
          // top: 38,
          cursor: "pointer",
          opacity: props.opacity,
          transform: props.rotation
        })}
      >
        <g>
          <g>
            <path d="M32,53c17.645,0,32-9.42,32-21S49.645,11,32,11S0,20.42,0,32S14.355,53,32,53z M32,13c16.542,0,30,8.523,30,19
              S48.542,51,32,51S2,42.477,2,32S15.458,13,32,13z"/>
          </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </animated.svg>

    </>
  );
};

export const HexIcon = props => {
  return (
    <>

      <animated.svg
        {...props.iconColor}
        // onClick={props.click}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 490 490"
        width={props.width}
        height={props.height}
        style={Object.assign({}, {
          position: 'absolute',
          left: 18,
          top: 18,
          cursor: "pointer",
          ...props.innerProps
        })}
      >
        <g>
          <polygon points="423.134,197.559 423.134,65.853 308.483,0 193.831,65.853 193.831,197.559 308.483,263.412 	"/>
          <polygon points="66.866,292.441 66.866,424.147 181.517,490 296.169,424.147 296.169,292.441 181.517,226.588 	"/>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </animated.svg>

    </>
  );
};

export const MenuIcon = props => {
  return (
    <>

      <animated.svg
        {...props.iconColor}
        onClick={props.click}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384.97 384.97"
        width={props.width}
        height={props.height}
        style={Object.assign({}, {
          ...props.burgerProps,
          position: 'absolute',
          top: 28,
          cursor: "pointer",
          // transform: `scaleX(-1)`
        })}
      >
        <g>
          <g id="Menu_1_">
            <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
              c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"/>
            <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
              S379.58,180.455,372.939,180.455z"/>
            <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
              c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"/>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </animated.svg>

    </>
  );
};