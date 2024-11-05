// import React from "react";
// import Particles from "react-tsparticles";

// function Particle() {
//   return (
//     <Particles
//       id="tsparticles"
//       params={{
//         particles: {
//           number: {
//             value: 160,
//             density: {
//               enable: true,
//               value_area: 1500,
//             },
//           },
//           line_linked: {
//             enable: false,
//             opacity: 0.03,
//           },
//           move: {
//             direction: "right",
//             speed: 0.05,
//           },
//           size: {
//             value: 1,
//           },
//           opacity: {
//             anim: {
//               enable: true,
//               speed: 1,
//               opacity_min: 0.05,
//             },
//           },
//         },
//         interactivity: {
//           events: {
//             onclick: {
//               enable: true,
//               mode: "push",
//             },
//           },
//           modes: {
//             push: {
//               particles_nb: 1,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// }

// export default Particle;

import React from 'react';
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <div id="particles-js">
      <Particles
        options={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#fff",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.6,
            },
            size: {
              value: 2,
              random: true,
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: { // Adding the move property
              enable: true,
              speed: 2, // Adjust the speed as desired
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: false,
              },
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
