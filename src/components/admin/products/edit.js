import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductById, getProduct } from '../../../store/actions/productActions';

class Edit extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.getProductById(this.props.match.params.id);
  }
  render() {
    // console.log(this.props);
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <form action="">
              <div className="form-group">
                <label htmlFor="title">Product Name</label>
                <input type="text" name="title" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Product Price</label>
                <input type="number" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Product Quantity</label>
                <input type="number" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-primary">update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
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
