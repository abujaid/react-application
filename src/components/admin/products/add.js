import React, { Component } from 'react';
import Input from '../../Fields/SingleInput';
import Button from '../../Fields/Button';
import Textarea from '../../Fields/Textarea';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { addProduct } from '../../../store/actions/productActions';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      quantity: '',
      description: '',
      errors: {}
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  static getDerivedStateFromProps(props, state) {
    if (props.error !== state.error) {
      return { errors: props.error };
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    const { title, description, quantity, price } = this.state;
    const data = {
      title: title,
      description: description,
      quantity: quantity,
      price: price
    };
    this.props.addProduct(data, this.props.history);
  };

  render() {
    const { title, price, quantity, description, errors } = this.state;
    console.log(errors);
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={this.handleSubmit}>
              <p className="red-text">{errors.title}</p>
              <Input
                type="text"
                name="title"
                value={title}
                htmlFor="title"
                label="Title"
                controlFunc={this.handleChange}
                className={classnames('form-control', {
                  invalid: errors.title
                })}
              />
              <p className="red-text">{errors.price}</p>
              <Input
                type="number"
                name="price"
                value={price}
                htmlFor="price"
                label="Product Price"
                controlFunc={this.handleChange}
                className={classnames('form-control', {
                  invalid: errors.price
                })}
              />
              <p className="red-text">{errors.quantity}</p>
              <Input
                type="number"
                name="quantity"
                value={quantity}
                htmlFor="quantity"
                label="Product Quantity"
                controlFunc={this.handleChange}
                className={classnames('form-control', {
                  invalid: errors.quantity
                })}
              />
              <p className="red-text">{errors.description}</p>
              <Textarea
                name="description"
                value={description}
                htmlFor="quantity"
                label="Description"
                controlFunc={this.handleChange}
                className={classnames('form-control', {
                  invalid: errors.description
                })}
              />
              <Button type="submit" buttonName="Add New Product" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { addProduct }
  )(Add)
);
