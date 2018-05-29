import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider.jsx'

class App extends React.Component{
  render(){
    return(
      <Slider/>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)