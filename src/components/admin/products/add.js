import React, { Component } from 'react';
import Input from '../../Fields/SingleInput';
import Button from '../../Fields/Button';
import { withRouter } from 'react-router-dom';
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      qty: ''
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    const { title, price, qty } = this.state;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                name="title"
                value={title}
                className="form-control"
                htmlFor="title"
                label="Title"
                controlFunc={this.handleChange}
              />
              <Input
                type="number"
                name="price"
                value={price}
                className="form-control"
                htmlFor="price"
                label="Product Price"
                controlFunc={this.handleChange}
              />
              <Input
                type="number"
                name="qty"
                value={qty}
                className="form-control"
                htmlFor="quantity"
                label="Product Quantity"
                controlFunc={this.handleChange}
              />
              <Button type="submit" buttonName="Add New Product" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Add);
