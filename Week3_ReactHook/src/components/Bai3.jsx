import React, { useEffect, useMemo, useState } from "react";

function Bai3() {
  const [productList, setProducList] = useState([
    {
      productName: "",
      price: 0,
    },
  ]);

  const [range, setRange] = useState(0);
  const [nameFind, setNameFind] = useState("");

  var productListMock = [
    { productName: "1", price: 100 },
    { productName: "2", price: 12 },
    { productName: "3", price: 12 },
    { productName: "4", price: 12 },
    { productName: "5", price: 12 },
  ];
  useEffect(() => {
    setProducList(productListMock);
  }, []);

  const productFilterd = useMemo(() => {
    var list = productList.filter((product) => {
      return (
        product.productName
          .toLocaleLowerCase()
          .includes(nameFind.toLocaleLowerCase()) && product.price <= range
      );
    });
    return list;
  }, [productList, nameFind, range]);

  const totalPrice = useMemo(() => {
    const sum = productFilterd.reduce((total, product) => {
      return total + product.price;
    }, 0);
    return sum;
  }, [productFilterd]);

  return (
    <div>
      <h3>Produc Name</h3>
      <input
        type="text"
        name="nameProduct"
        id=""
        value={nameFind}
        onChange={(e) => setNameFind(e.target.value)}
      />
      <h3>Range price</h3>
      <input
        type="number"
        name="price"
        value={range}
        onChange={(e) => setRange(e.target.value)}
        placeholder="range"
      />

      <div>
        <h3>Product List</h3>
        <ul>
          {productList.map((product) => (
            <li key={product.id}>
              {product.productName}-{product.price}
            </li>
          ))}
        </ul>
        <h3>Product Filter</h3>
        <ul>
          {productFilterd.map((product) => (
            <li key={product.id}>
              {product.productName}-{product.price}
            </li>
          ))}
        </ul>
        <span>total : {totalPrice}</span>
      </div>
    </div>
  );
}

export default Bai3;
