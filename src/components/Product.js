// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    <div>
      <p>this.props.name</p>
      <p>this.props.producer</p>
      <p>this.props.hasWatermark</p>
      <p>this.props.color</p>
      <p>this.props.weight</p>
    </div>
  }
}

const colors = ['white', 'eggshell-white', 'salmon']
const weight = [];

for (var i = 80; i < 301 ; i++) {
   weight.push(i);
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(colors).isRequired,
  weight: PropTypes.oneOf(weight).isRequired
}

Product.defaultProps = {
  hasWatermark: false
};

export default Product;
