import React, { Component } from "react";

export default class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      fontSize: "26",
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    let randomNumber = Math.floor(
      Math.random() * this.state.allMemeImgs.length
    );
    this.setState({ randomImg: this.state.allMemeImgs[randomNumber].url });
  };


  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  render() {
    return (
      <div>
        <div className="memeForm">
          <h1>Random Meme Generator</h1>
          <input
            type="text"
            name="topText"
            placeholder="Enter here your top text"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <br />
          <input
            type="text"
            name="bottomText"
            placeholder="Enter here your bottom text"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />
          <br />
          <label>Font Size: </label>
          <input
            type="number"
            name="fontSize"
            onChange={this.handleChange}
            value={this.state.fontSize}
          />
          <button onClick={this.handleClick}>Generate new meme</button>
        </div>
        <div className="meme">
          <h2 style={{ fontSize: Number(this.state.fontSize) }} className="top">
            {this.state.topText}
          </h2>
          <img src={this.state.randomImg} alt="" />
          <h2
            style={{ fontSize: Number(this.state.fontSize) }}
            className="bottom"
          >
            {this.state.bottomText}
          </h2>
        </div>
      </div>
    );
  }
}