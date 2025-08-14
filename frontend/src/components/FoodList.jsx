import React from 'react';

const FoodList = ({ disabled }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Date</th>
        <th>Food</th>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* Example rows, replace with real data later */}
      <tr>
        <td>{new Date('2025-08-13T12:30:00').toLocaleString()}</td>
        <td>Pizza</td>
        <td>Lunch with friends</td>
        <td><button className="btn btn-warning btn-sm" disabled={disabled}>Edit</button></td>
        <td><button className="btn btn-danger btn-sm" disabled={disabled}>Delete</button></td>
      </tr>
      <tr>
        <td>{new Date('2025-08-13T19:00:00').toLocaleString()}</td>
        <td>Salad</td>
        <td>Healthy dinner</td>
        <td><button className="btn btn-warning btn-sm" disabled={disabled}>Edit</button></td>
        <td><button className="btn btn-danger btn-sm" disabled={disabled}>Delete</button></td>
      </tr>
    </tbody>
  </table>
);

export default FoodList;
