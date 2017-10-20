import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react'

import {Provider} from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

const ReduxApp = () =>{
    return(
    <Provider store={store}>
        <App/>
    </Provider>
    )
}

AppRegistry.registerComponent('rnredux', () => ReduxApp);
