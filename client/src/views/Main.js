import {useState} from 'react';
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/AllProducts';

const Main =() => {
    const [productList, setProductList] = useState([]);
    const removeFromDom = productId => {
        setProductList(productList.filter(product => product._id != productId));
    }

    return (
        <div>
            <ProductForm productList={productList} setProductList={setProductList}/>
            <hr />
            <h1>All Products:</h1>
            <AllProducts productList={productList} setProductList={setProductList} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;