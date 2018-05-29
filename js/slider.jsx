import React from 'react';
import ReactDOM from 'react-dom';
import SlideOne from './slides/slideOne.jsx';
import SlideTwo from './slides/slideTwo.jsx';
import SlideThree from './slides/slideThree.jsx';
import './../scss/main.scss';

class ButtonNext extends React.Component{
  render(){
    return(
      <div onClick={this.props.nextSlide} className='slide-button' className='slide-button-next'>{this.props.inside}  &gt; </div>
    )
  }
}

class ButtonPrev extends React.Component{
  render(){
    return(
      <div onClick={this.props.previousSlide} className='slide-button' className='slide-button-prev'>{this.props.inside} &lt; </div> 
    )
  }
}

class Slider extends React.Component{

  state = {
    slideNumber: 1,
    opacity: 1
  }
      
  nextSlide = () =>{
    if(this.state.slideNumber < 3){
      this.setState({ slideNumber: this.state.slideNumber + 1 })
    }else{
      this.setState({ slideNumber: 1 })
    }
    
  }

  previousSlide = () => {
    if(this.state.slideNumber > 1){
      this.setState({ slideNumber: this.state.slideNumber - 1 })
    }else{
      this.setState({ slideNumber: 3 })
    }
  }


  render(){
    return(
      <div className='main-slider'>
        { this.state.slideNumber === 1 ? <SlideOne /> : null }
        { this.state.slideNumber === 2 ? <SlideTwo /> : null }
        { this.state.slideNumber === 3 ? <SlideThree /> : null }
        <ButtonPrev previousSlide={this.previousSlide}/>
        <ButtonNext nextSlide={this.nextSlide} />
      </div>
    )
  }
}

export default Slider