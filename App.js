import React from 'react';
import { Provider } from 'react-redux'
import makeStore from './src/store';
import MainView from './src/components/main.view'

export const store = makeStore();

export default class App extends React.Component {
	store = store
	state = {
    fontsLoaded: false,
  }

	// async componentDidMount() {
  //   await Font.loadAsync({
  //     'FontAwesome': require('./assets/fonts/fontawesome-webfont.ttf'),
	// 	});
	// 	this.props.fontsLoaded = true
	// }

	render() {
		console.log(this.store)
    return (
			<Provider store={this.store}>
				<MainView/>
			</Provider>
    );
  }
}
