import React from "react";
import { TProduct } from "../../interfaces/Product";
import { Link } from "react-router-dom";

type Props = {
  products: TProduct[];
};

const Dashboard = ({ products }: Props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/admin/add">
        <button className="btn btn-primary">Add Product</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <img width={60} src={item.thumbnail} alt={item.title} />
              </td>
              <td>{item.description}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
