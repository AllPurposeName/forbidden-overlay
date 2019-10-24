// import React from 'react';
// import ReactDOM from 'react-dom';
// import times from 'lodash/times';
// import HexagonGrid from '../src/HexagonGrid';
//
// export default HexLayover;
//
// const HexGridDemo = () => {
//   const getHexProps = (hexagon) => ({
//     style: {
//       fill: '#007aff',
//       stroke: 'white',
//     },
//     onClick: () => alert(`Hexagon n.${hexagon} has been clicked`),
//   });
//
//   const renderHexagonContent = (hexagon) => (
//     <text
//       x="50%"
//       y="50%"
//       fontSize={100}
//       fontWeight="lighter"
//       style={{ fill: 'white' }}
//       textAnchor="middle"
//     >
//       {hexagon}
//     </text>
//   );
//
//   const hexagons = times(102, (id) => id);
//
//   return (
//     <HexagonGrid
//       gridWidth={500}
//       gridHeight={500}
//       hexagons={hexagons}
//       hexProps={getHexProps}
//       renderHexagonContent={renderHexagonContent}
//     />
//   );
// };
//
// ReactDOM.render(
//   <HexGridDemo />,
//   document.getElementById('root'),
// );
