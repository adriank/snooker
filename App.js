import React from 'react'
import { Provider } from 'react-redux'
import makeStore from './src/store'
import MainView from './src/containers/Main'

export const store = makeStore();

export default class App extends React.Component {

	state = {
		fontsLoaded: false,
	}

	constructor (){
		super()
		this.store = store
	}

	// async componentDidMount() {
  //   await Font.loadAsync({
  //     'FontAwesome': require('./assets/fonts/fontawesome-webfont.ttf'),
	// 	});
	// 	this.props.fontsLoaded = true
	// }

	render() {
    return (
			<Provider store={this.store}>
				<MainView/>
			</Provider>
    )
  }
}
