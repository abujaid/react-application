import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import moment from 'moment';

import Swal from 'sweetalert2';

import { getProduct, removeProduct } from '../../../store/actions/productActions';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };
  }

  componentDidMount() {
    this.props.getProduct();
  }
  removeProduct = id => {
    this.props.removeProduct(id);
    this.setState({ success: true });

    Swal.fire({
      title: 'Deleted',
      type: 'success',
      text: 'your recard has been deleted.',
      timer: 1500
    });
  };
  render() {
    const { products, isLoading } = this.props.products;
    return (
      <div className="container">
        {!isLoading ? (
          <div className="row">
            <Link to="/add-product" className="btn btn-primary mt-2 mb-2">
              Add Product
            </Link>

            <table className="table">
              <thead>
                <tr>
                  {/* <td>Id</td> */}
                  <td>Date</td>
                  <td>Product Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {products.map(({ _id, title, description, price, quantity, date }) => (
                  <tr key={_id}>
                    <td>{moment(date).format('DD/MM/YYYY')}</td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => this.removeProduct(_id)}>
                        X
                      </button>
                      <Link to={`/product/edit/${_id}`} className="btn btn-primary">
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center mt-5">
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.product
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { getProduct, removeProduct }
  )(Products)
);
