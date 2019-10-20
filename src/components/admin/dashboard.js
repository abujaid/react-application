import React from 'react';

export default function Dashboard() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4">
          <div className="card bg-dark text-white">
            <div className="card-header">Users</div>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, architecto?
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card bg-danger text-white">
            <div className="card-header">Totla Products</div>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card bg-secondary text-white">
            <div className="card-header">Sold Products</div>
            <div className="card-body">
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dicta!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
