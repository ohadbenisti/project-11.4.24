import './App.css';
import { useState, useEffect } from 'react';
import ProductsList from './components/productsList/ProductsList'
import AddItem from './components/AddItem/AddItem';



function App() {

  const [productsArr, setProductArr] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProductArr(data))
      .catch((err) => console.log(err))
  }, [])
  const addProduct = (product)=>{
    setProductArr([...productsArr, product])
  }
  return (
    <div className="App">
      <AddItem addProduct={addProduct}/>
      <ProductsList products={productsArr} />
    </div>
  );
}


export default App;
