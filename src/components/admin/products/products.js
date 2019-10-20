import React, { Component } from 'react';

export default class Products extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <td>Id</td>
                <td>Date</td>
                <td>Product Name</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>10/15/2019</td>
                <td>Ttilte</td>
                <td>action</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
