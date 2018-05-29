import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component{
  render(){
    return(
      <h1 className='slideTitle'>Title</h1>
    )
  }
}

class Description extends React.Component{
  render(){
    return(
      <h3 className='slideDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illo omnis a obcaecati accusantium? Alias fugiat magnam perferendis ex velit.</h3>
    )
  }
}

class MoreInfo extends React.Component{
  render(){
    return(
      <button>Learn More</button>
    )
  }
} 

class SlideTwo extends React.Component{
  render(){
    return(
      <div className='slide' style={{backgroundColor: 'blue'}}>
        <Title/>
        <Description/>
        <MoreInfo/>
      </div>
    )
  }
}

export default SlideTwo;