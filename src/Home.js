import React from 'react';
import Sunset from './sunsetCloud.webp';

export default function Home() {
  return (
    <div className='home'>
      <div className='nameTag' style={ { backgroundImage: `url(${Sunset})` }}>
        <h1>Kyra L. Christensen</h1>
        <h2>Full-Stack Software Developer</h2>
      </div>
      <div>
        <h3>This is just a place where extra text will go.</h3>
      </div>
    </div>
  );
}
