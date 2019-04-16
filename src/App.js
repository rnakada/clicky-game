import React, { Component } from 'react';
import './App.css';
import Navbar from "./component/Navbar";
import Cars from "./component/Cars";
import Jumbotron from "./component/Jumbotron";
import cars from "./cars.json";



class App extends Component {

  state = {
    cars: cars,
    score: 0,
    clickedCar: []
  };

  componentDidMount() {

    this.setState({
      cars: this.random(this.state.cars)
    }, () => {
      console.log("Shuffled!")
    })

  };

  handleClick = (event) => {

    const carClicked = event.target.alt;
    const carClickedAlready = this.alreadyClickedCar(carClicked);

    if (carClickedAlready) {
      this.setState({
        cars: this.random(this.state.cars),
        clickedCar: [],
        score: 0
      })
      alert("You Lose!");
    }
    else {
      const updateScore = this.state.score + 1;
      if (updateScore === this.state.cars.length) {
        this.setState({
          cars: this.random(this.state.cars),
          clickedCar: [],
          score: updateScore
        });
      }
      else {

        const carsArray = this.state.clickedCar.slice();

        carsArray.push(carClicked);

        this.setState({
          cars: this.random(this.state.cars),
          clickedCar: carsArray,
          score: updateScore
        }, () => {
          if (this.state.score === 8) {
            alert("You Win!");
            this.setState({
              cars: this.random(this.state.cars),
              clickedCar: [],
              score: 0
            });
          }
        });
      }
    }
  };

  random = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  alreadyClickedCar = (carClicked) => {
    for (let i = 0; i < this.state.clickedCar.length; i++) {
      if (this.state.clickedCar[i] === carClicked) {
        return true;
      }
    }
    return false;
  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper ">
          {
            this.state.cars.map((cars) => {
              return (
                <Cars
                  clickHandler={this.handleClick}
                  key={cars.id}
                  name={cars.name}
                  image={cars.image}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
