import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AdoptionApiService } from '../services/adoption-api-services';
import './Adopt.css';

class Adopt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      cat: "",
      dog: ""
    };
  };

  componentDidMount() {
    AdoptionApiService.getPeople()
    .then(this.setPeople)
    AdoptionApiService.getCat()
      .then(this.setCat)
    AdoptionApiService.getDog()
      .then(this.setDog)
  };

  setPeople = people => {
    this.setState({ people });
  };

  setCat = cat => {
    this.setState({ cat });
  };

  setDog = dog => {
    this.setState({ dog });
  };

  figureQueue = (people) => {
    let person = "";
    let queue = [];
    for (let i = 0; i < people.length; i++) {
      if (i === 0) {
        person = people[i];
      } else {
        queue.push(people[i] + ' | ');
      };
    };
    return (
      <section className='order'>
        <h3>First in queue: {person}</h3>
        <div className='queue'>
          <h5>The rest of the queue: {queue}</h5>
        </div>
      </section>
    )
  };

  render() {
    let { people, cat, dog } = this.state;
    console.log('people in line', people)
    console.log('my cats', cat[0])

    return <div>
      <Link to='/'><h1>Petful</h1></Link>
      {this.figureQueue(people)}
      <Link to='/pets'><h5>All Pets</h5></Link>
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