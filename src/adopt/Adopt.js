import React from 'react';
import { Link } from 'react-router-dom';
import './Adopt.css';

function Adopt() {
  return <div>
    <Link to='/'><h1>Petful</h1></Link>
    <h3>Currently in Queue: Barb</h3>
    <h4>Next in Queue: Bubbles</h4>
    <br />
    <section className='adopter'>
      <div className='cats'>
        <h2>Cats</h2>
        {/* a whole
        bunch
        of data
        on Cats
        or kitties */}
        <button>Adopt this Cat</button>
      </div>
      <div className='dogs'>
        <h2>Dogs</h2>
        {/* a whole
        bunch
        of data
        on Dogs
        or puppies */}
        <button>Adopt this Dog</button>
      </div>
    </section>
  </div>
};

export default Adopt;