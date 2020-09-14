import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
	render() {
		window.navigator.geolocation.getCurrentPosition((position) => console.log(position), (err) => console.log(err));
		return <div>latitude :</div>;
	}
}
ReactDom.render(<App />, document.querySelector('#root'));
