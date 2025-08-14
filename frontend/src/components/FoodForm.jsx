import React from 'react';

const FoodForm = () => (
  <form className="mb-4">
    <div className="row g-2 align-items-center">
      <div className="col-md-3">
        <input type="date" className="form-control" placeholder="Date" />
      </div>
      <div className="col-md-3">
        <input type="text" className="form-control" placeholder="Time" />
      </div>
      <div className="col-md-4">
        <input type="text" className="form-control" placeholder="Description" />
      </div>
      <div className="col-md-2">
        <button type="submit" className="btn btn-success w-100">Add Food</button>
      </div>
    </div>
  </form>
);

export default FoodForm;
