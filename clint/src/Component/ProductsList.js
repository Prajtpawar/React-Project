import React, { useState, useEffect } from 'react'
import {Link}from 'react-router-dom'

const ProductsList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts();

    }, [])
    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products')
        result = await result.json()
        setProducts(result)

    }
    console.warn("Product", products)
    const deleteproduct=async(id)=>{
        let result= await fetch(`http://localhost:5000/product/${id}`,{
            method:'Delete'

        })
        result =await result.json()
        if(result){
            getProducts();
        }
    }
    const searchHandle=async(e)=>{
        let key= e.target.value
        if(key){
            let result=await fetch(`http://localhost:5000/search/${key}`)
        result=await result.json()
        if (result){
            setProducts(result)
        }
        }
        else{
            getProducts();
        }

    }
    return (
        <div className='product-list'>
            <h1 >Product List</h1>
            <input type="text" placeholder='Search Product' className='search'
            onChange={searchHandle}/>
            
           
            <ul >
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Catagory</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.length>0? products.map((item,index) => 
                    <ul key={item._id} >
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.catagory}</li>
                        <li>{item.company}</li>
                        <li><button onClick={()=>
                            deleteproduct(item._id)
                        }>Delete</button>
                        <Link to={"/update/"+item._id}> Update </Link></li>

                    </ul>

                )
                :
                <h1>No record Found</h1>
            }
        </div>
    )
}

export default ProductsList
