import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Spinner, Table } from 'reactstrap';
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
      toast: true,
      title: 'Deleted',
      position: 'bottom-end',
      type: 'success',
      text: 'your record has been deleted.',
      timer: 1500
    });
  };
  render() {
    const { products, isLoading } = this.props.products;

    return (
      <div className="container-fluid">
        {!isLoading ? (
          <div className="row">
            <Link to="/admin/add-product" className="btn btn-primary mt-2 mb-2">
              Add Product
            </Link>

            <Table responsive striped>
              <thead>
                <tr>
                  {/* <td>Id</td> */}

                  <th>Date</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Category</th>
                  <th>Manufracturer</th>
                  <th>Available</th>
                  <th>On Hand</th>
                  <th>On Order</th>
                  <th>Loaction</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map(({ _id, title, description, price, quantity, date }) => (
                  <tr key={_id}>
                    <td>{moment(date).format('DD/MM/YYYY')}</td>
                    <td>image</td>
                    <td>{description}</td>
                    <td>{title}</td>
                    <td>{price} &#8377;</td>
                    <td>{quantity}</td>
                    <td>cat</td>
                    <td>manu</td>
                    <td>100</td>
                    <td>10</td>
                    <td>20</td>
                    <td>A-row</td>
                    <td></td>
                    <td>
                      <button className="btn btn-danger" onClick={() => this.removeProduct(_id)}>
                        X
                      </button>{' '}
                      <Link to={`/product/edit/${_id}`} className="btn btn-primary">
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
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
