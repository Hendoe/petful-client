import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AdoptionApiService } from '../services/adoption-api-services';
import './Pets.css';

class Pets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      dogs: []
    };
  };

  componentDidMount() {
    AdoptionApiService.getCats()
      .then(this.setCats)
    AdoptionApiService.getDogs()
      .then(this.setDogs)
  };

  setCats = cats => {
    this.setState({ cats });
  };

  setDogs = dogs => {
    this.setState({ dogs });
  };

  render() {
    let { cats, dogs } = this.state;


    return <div>
      <Link to='/'><h1>Petful</h1></Link>
      <h3>All our adoptable Pets</h3>
      <Link to='/adopt'><h5>Return to Adoption Service</h5></Link>
      <br />
      <section className='adoptables'>
        <div className='cats'>
          <h2>Adoptable Cats</h2>
            {cats.map(cat => (
            <ul className='together'>
              <li><img className='small-pic' src={cat.imageURL} alt='The Cat' /></li>
              <li>Name: {cat.name}</li>
            </ul>
            ))}
        </div>
        <div className='dogs'>
        <h2>Adoptable Dogs</h2>
          {dogs.map(dog => (
          <ul className='together'>
              <li><img className='small-pic' src={dog.imageURL} alt='The Dog' /></li>
              <li>Name: {dog.name}</li>
            </ul>
          ))}
        </div>
      </section>
    </div>
  };
};

export default Pets;