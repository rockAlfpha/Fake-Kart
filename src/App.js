import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ProductList from './components/ProductList.js';
import React,{useState} from 'react';
import AddItem from './components/Additem';



function App() {

  const products = [
  {
    price:99999,
    name:"iPhone 13 pro max",
    quantity:0,
  },
  {
    price:89999,
    name:"iPhone 12 pro max",
    quantity:0,
  }
]

let [productList, setProductList] = useState(products);
let [totalAmount, setTotalAmount] = useState(0);

const increamentQuantity =(index)=>{
  let newProductList = [...productList];
  newProductList[index].quantity++;
  let newTotalAmount = totalAmount;
  newTotalAmount += newProductList[index].price
  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
}

const decreamentQuantity =(index)=>{
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;

  if(newProductList[index].quantity > 0){
    newProductList[index].quantity--;
    newTotalAmount -= newProductList[index].price;
  }
  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
}

const resetQuantity = ()=>{
  let newProductList = [...products];
  newProductList.map((products)=>{
    products.quantity = 0;
  })
  setProductList(newProductList);
  setTotalAmount(0);
}

const removeItem = (index)=>{
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;
  newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
  newProductList.splice(index, 1);
  setProductList(newProductList)
  setTotalAmount(newTotalAmount);
}

const AddItem = (name, price)=>{
  let newProductList = [...productList];
  newProductList.push({
    price:price,
    name:name,
    quantity:0
  });
  setProductList(newProductList);

}



  return (
    <>

    <Navbar/>
    <main className='container mt-5'>
    <AddItem AddItem={AddItem}/>
    <ProductList productList={productList} increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity} removeItem={removeItem} />

    </main>
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />


    </>
  );
}

export default App;
