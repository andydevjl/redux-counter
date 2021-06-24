import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';


const actionIncremented = {
  type: '@counter/incremented'
}

const actionDecremented = {
  type: '@counter/decremented'
}

const actionReset = {
  type: '@counter/reseted'
}

const counterReducer = (state = 0, action) =>{
  switch(action.type) {
    case '@counter/incremented':
      return state + 1;
    case '@counter/decremented':
      return state -1;
    case '@counter/reseted':
      return 0;
    default:
      return state
    }
}

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


store.subscribe(() => {
  console.log(store.getState())
})

const App = () => {
  return (
    <div>
    <div className="App">
      {store.getState()}
    </div>
    <button 
      onClick={() => store.dispatch(actionIncremented)}
    >
      +
    </button>
    <button 
      onClick={() => store.dispatch(actionDecremented)}
    >
      -
    </button><button 
      onClick={() => store.dispatch(actionReset)}
    >
      reset
    </button>
    </div>
  )
}

const renderApp = () => {
ReactDOM.render(
    <App />,
  document.getElementById('root')
  );
}

renderApp()
store.subscribe(renderApp);