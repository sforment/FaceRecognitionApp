import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageFormLink from "./Components/ImageFormLink/ImageFormLink";
import Rank from "./Components/Rank/Rank";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import "./App.css";

const app = new Clarifai.App({
	apiKey: "059124b11094422d9661fbb6fb9f5153"
});

const particleOptions = {
	particles: {
		number: {
			value: 1,
			density: {
				enable: true,
				value_area: 800
			}
		}
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
			imageUrl: ""
		};
	}

	onInputChange = event => {
		this.setState({ input: event.target.value });
	};

	onButtonSubmit = event => {
		this.setState({ imageUrl: this.state.input });
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
			function(response) {
				console.log(
					response.outputs[0].data.regions[0].region_info.bounding_box
				);
			},
			function(err) {
				// there was an error
			}
		);
	};

	render() {
		return (
			<div className="app">
				<Particles className="particles" params={{ particleOptions }} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageFormLink
					onInputChange={this.onInputChange}
					onButtonSubmit={this.onButtonSubmit}
				/>
				<FaceRecognition imageUrl={this.state.imageUrl} />
			</div>
		);
	}
}

export default App;
