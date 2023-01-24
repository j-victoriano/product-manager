import { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {productList, setProductList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res =>{
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} />
                </p>
                <input type="submit" value="Create Product" />
            </form>
        </>
    )
}

export default ProductForm;