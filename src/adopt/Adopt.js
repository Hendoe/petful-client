import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AdoptionApiService } from '../services/adoption-api-services';
import './Adopt.css';

class Adopt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: "",
      cat: "",
      dog: ""
    };
  };

  componentDidMount() {
    AdoptionApiService.getCat()
      .then(this.setCat)
    AdoptionApiService.getDog()
      .then(this.setDog)
  };

  setCat = cat => {
    this.setState({ cat });
  };

  setDog = dog => {
    this.setState({ dog });
  };

  render() {
    let { cat, dog } = this.state;


    return <div>
      <Link to='/'><h1>Petful</h1></Link>
      <h3>Currently in Queue: Barb</h3>
      <h4>Next in Queue: Bubbles</h4>
      <br />
      <section className='adopter'>
        <div className='cats'>
          <h2>Adoptable Cat</h2>
            <ul>
              <li><img className='adoption-pic' src={cat.imageURL} alt='The Cat' /></li>
              <li>Name: {cat.name}</li>
              <li>Age: {cat.age}</li>
              <li>Breed: {cat.breed}</li>
              <li>Description: {cat.description}</li>
              <li>Gender: {cat.gender}</li>
              <li>Story: {cat.story}</li>
            </ul>
          <button>Adopt this Cat</button>
        </div>
        <div className='dogs'>
        <h2>Adoptable Dog</h2>
            <ul>
              <li><img className='adoption-pic' src={dog.imageURL} alt='The Dog' /></li>
              <li>Name: {dog.name}</li>
              <li>Age: {dog.age}</li>
              <li>Breed: {dog.breed}</li>
              <li>Description: {dog.description}</li>
              <li>Gender: {dog.gender}</li>
              <li>Story: {dog.story}</li>
            </ul>
          <button>Adopt this Dog</button>
        </div>
      </section>
    </div>
  };
};

export default Adopt;