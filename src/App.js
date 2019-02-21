import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import Nav from './components/Nav';
import CaseStudy from './components/CaseStudy';

const store = createStore(rootReducer, composeWithDevTools());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Nav />
          <CaseStudy />
        </div>
      </Provider>
    );
  }
}

export default App;
