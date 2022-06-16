import './Recipes.scss';
import React from 'react';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;
    return (
      <div className="recipes">
        <h2 className="recipes__title">Hello world!</h2>
        <h3 className="recipes__clock">
          It&apos;s&nbsp;
          {date.toLocaleTimeString()} 
          &nbsp;now.
        </h3>
      </div>
    );
  }
}

export default Recipes;
