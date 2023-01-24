import {useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();

    const [title, setTitle ] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err => console.error(err));
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/products/' + id, {
            title: title,
            price: price,
            description: description
        })
            .then(res => {
                console.log(res);
                console.log("We have updated! Redirecting you back now");
                navigate('/');
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update Product:</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label>
                    <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
                </p>
                <p>
                    <label>Price: </label>
                    <input type="text" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}}></input>
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}></input>
                </p>
                <input type="submit" value="Update" />
            </form>
            <button>
                <a href="/">Home</a>
            </button>
        </div>
    )
}

export default Update;