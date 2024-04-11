import React from 'react'

const addItem = ({addProduct}) => {
    let productDetails = {}
    const setProductDetails = (e) => {
        productDetails[e.target.name] = e.target.value;
        console.log(productDetails);
    }
    const postProduct = async() => {
       const res = await fetch("http://localhost:5000/products", {
            method: "POST",
            body: JSON.stringify(productDetails)
        })
       if (res.ok)
        addProduct(productDetails)
       }
    

    return (
        <>
            <h5>Add an Item:</h5>
            <form action="postReq" className="d-flex mx-auto row w-25">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onInput={(e) => setProductDetails(e)} />
                <label htmlFor="cat">Category: </label>
                <input type="text" name="cat" onInput={(e) => setProductDetails(e)} />
                <label htmlFor="price">Price: </label>
                <input type="text" name="price" onInput={(e) => setProductDetails(e)} />
                <submit className="btn btn-info mt-3" onClick={postProduct}> Add Item</submit>
            </form></>
    )
}

export default addItem
