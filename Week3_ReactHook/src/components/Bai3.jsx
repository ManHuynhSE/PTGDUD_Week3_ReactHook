import React, { useEffect, useState } from 'react'

function Bai3() {
    const [productList,setProducList] = new useState([
        {
            productName:"",
            price:0
        }
    ])
    const [productFilterd,setProductFilterd] = new useState([
        {
            productName:"none",
            price:0
        }
    ])

    const [range,setRange] = new useState(0)
    const [nameFind,setNameFind] = new useState("")
    const [total,setTotal] = new useState(0)
    var productListMock = [{productName:"1",price:100},{productName:"2",price:12},{productName:"3",price:12},{productName:"4",price:12},{productName:"5",price:12}]
    useEffect(()=>{
        setProducList(productListMock)
    },[])

    function handleFilter () {
        const name= nameFind;
        const ra = range;
        var sum = 0;
        var list = productList.filter(product=>{
            return product.productName.toLowerCase().includes(name.toLowerCase()) && (product.price < ra )
        })
        setProductFilterd(list)
        console.log(list);
        sum = productFilterd.reduce((total,product)=>{
            return total+product.price
        },0)
        
        setTotal(sum);
        
    }

  return (
    <div>
        <h3>Produc Name</h3>
        <input type="text" name="nameProduct" id="" value={nameFind} onChange={(e)=> setNameFind(e.target.value)}/>
        <h3>Range price</h3>
        <input type="number" name='price' value={range} onChange={(e)=> setRange(e.target.value)} placeholder='range'/>
        <h3></h3>
        <button onClick={handleFilter}>Find and calculate</button>
        
        <div>
             <h3>Product List</h3>
        <ul >
            {productList.map((product)=>(
                <li key={product.id}>
                    {product.productName}-
                    {product.price}
                </li>
            ))}
        </ul>
        <h3>Product Filter</h3>
        <ul >
            {productFilterd.map((product)=>(
                <li key={product.id}>
                    {product.productName}-
                    {product.price}
                </li>
            ))}
        </ul>
        <span>total : {total}</span>
        </div>
        
    </div>
  )
}

export default Bai3
