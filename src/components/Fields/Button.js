import React from 'react';

export default function Button({ type, className, value, name, buttonName }) {
  return (
    <div className="form-group">
      <button className={className} type={type}>
        {buttonName}
      </button>
    </div>
  );
}
