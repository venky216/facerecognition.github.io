import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particle from './components/Particles/Particles'
import Clarifai from 'clarifai'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
const app = new Clarifai.App({
  apiKey: '60c4cb84e64a45d1aeab663cc5dcc9e6'
 });
class App extends Component {
  constructor(){
    super();
    this.state = {
      input :'',
      imageurl:'https://static1.squarespace.com/static/5615ad2ae4b05e4f5e8027a0/t/5a0eb49553450a5bbca9988e/1510913185745/take-that-reveal-more-details-about-their-musical-the-band-01.jpg',
      box:{},
      faces: '3'
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions.length;
    console.log(clarifaiFace)
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }
  onInputChange =(e)=>{
    this.setState({
      input: e.target.value
    })
  }
  clicked =()=>{
    this.setState({
      imageurl: this.state.input
    })
    console.log(this.state.imageurl);
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then((response) =>{
      this.setState({faces:(response.outputs[0].data.regions.length)})
        this.displayFaceBox(this.calculateFaceLocation(response))})
   
  }
  render() {
    return (
      <div className="App">
      <Particle />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} clicked ={this.clicked}/>
      <FaceRecognition box= {this.state.box} imageurl ={this.state.imageurl} faces={this.state.faces}/>
      </div>
    );
  }
}

export default App;
