import React from 'react';
import gearGif from './Gear.gif'; // Import the GIF from the same folder

export default function Spinner() {
  return (
    <div>
      <img src={gearGif} alt="loading"/>
    </div>
  );
}
