const React = require('react');

class CoordinatesButton extends React.Component {
  constructor(props) {
    super();
    this.vagueArray = this.vagueArray.bind(this)
  }
  vagueArray(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render() {
    return (
      <button onClick={this.vagueArray}></button>
    );
  }
}

module.exports = CoordinatesButton
