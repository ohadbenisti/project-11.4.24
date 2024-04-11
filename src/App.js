import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [productsArr, setProductArr] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProductArr(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
