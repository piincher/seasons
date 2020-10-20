import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './Season.component';
import Spinner from './spinner.component.js';

class App extends React.Component {
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>error : {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return (
			<div>
				<Spinner message="please accept location request " />
			</div>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

ReactDom.render(<App />, document.querySelector('#root'));
