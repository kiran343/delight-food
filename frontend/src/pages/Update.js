import React, { use, useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Update.css";

const Update = () => {
  const [productItems, setProductsItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5002/get")
      .then((res) => res.json())
      .then((data) => setProductsItems(data));
    console.log(productItems);
  }, []);

  const DeleteItems = (id) => {
    fetch(`http://localhost:5002/food/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error("deleted successfully");
        setProductsItems((prevProductItems) =>
          prevProductItems.filter((Item) => Item._id !== id)
        );
      });
  };
  return (
    <div>
      <div className="card.table2">
        <div className="card-body">
          <table className="table1">
            <tr>
              <th>Tittle</th>
              <th>Images</th>
              <th>Description</th>
              <th>Price</th>
              <th>Foodtype</th>
              <th>Action</th>
            </tr>

            {productItems.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>
                  <img
                    src={item.img}
                    style={{ width: "50px", height: "10vh", border: "0px" }}
                  />
                </td>
                <td>{item.des}</td>
                <td>{item.price}</td>
                <td>{item.foodtype}</td>

                <td className="w-25">
                  <button
                    className="table3"placeholder="delete"onClick={() => DeleteItems(item._id)}>Delete</button>
                  <Link to={`/edit/${item._id}`}><button className="ms-5 table4">Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Update;
