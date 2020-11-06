import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import catHouse from '../images/catHouse.jpg';

function Welcome() {
  return <div>
    <h1>Petful</h1>
    <p>Do you want to adopt a cat? How about a dog? Here at Petful, we can help you with that.</p>
    <p>All you need to do is walk in the door, get in line, and pick your brand new pet. Either a cat or dog.</p>
    <p>We will help you find your furry forever friend.</p>
    <br />
    <img className='welcome' src={catHouse} alt='Cat House' />
    <br />
    <button>
      <Link to='/adopt'>
        Adopt
        </Link>
        </button>
  </div>
};

export default Welcome;