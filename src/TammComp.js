import React, { useState } from 'react';
import './style.css';

export default function ProjectComponent(props) {
  const hoverText = props.isHovered ? 'IN' : 'Out';
  let green = '#11e619';
  let red = '#9a0426';
  const [colorCode, setColor] = useState('#11e6');

  function colorChange(e) {
    const newColor = colorCode === green ? red : green;
    console.log('oldColor-', colorCode);
    console.log('newColor-', newColor);
    setColor(newColor);
  }

  return (
    <div>
      <h3>TAMM Component using StackBlitz..</h3>
      {console.log('props :', props)}
      {console.log('props-data-name :', props.data[0].name)}
      {/* <h2 {...props} style={{ backgroundColor: componentTextColor }}> */}
      <h2 {...props} style={{ color: colorCode }} onClick={colorChange}>
        Mouse is Hover {hoverText} to Component.
      </h2>
    </div>
  );
}
