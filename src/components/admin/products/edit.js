import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductById, getProduct } from '../../../store/actions/productActions';

class Edit extends Component {
  componentDidMount() {
    this.props.getProductById(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return <div>Edit Product</div>;
  }
}
const mapStateToProps = state => {
  return {
    product: state.product
  };
};
export default connect(
  mapStateToProps,
  { getProductById }
)(Edit);
