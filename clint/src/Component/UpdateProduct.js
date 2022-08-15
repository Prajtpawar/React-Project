import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const UpdateProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [catagory, setCatagory] = useState("")
    const [company, setCompany] = useState("")
    const params=useParams();
    const navigate= useNavigate()
    useEffect(() => {
        
        getProductDeatiles()
     
    }, [])
    const getProductDeatiles=async()=>{
        console.warn(params)
        let result=await fetch(`http://localhost:5000/product/${params.id}`);
        result=await result.json()
        setName(result.name)
        setPrice(result.price)
        setCatagory(result.catagory)
        setCompany(result.company)

    }
    
    
    const updateProduct=async()=>{
        console.log(name,price,catagory,company)
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"Put",
            body:JSON.stringify({name,price,catagory,company}),
            headers: {
                'Content-Type': 'application/json'
              }
            
        });
        result=await result.json()
        console.log(result)
        navigate("/")
        
        
            

        }
        
        
        
    
  return (
    <div className='product'>
      <h1 className='heading'>Update Product</h1>
      <input type="text" placeholder='Enter Product Name' className='inputBox'value={name} onChange={(e)=>{setName(e.target.value)}}
      />
      
      <input type="text" placeholder='Enter Product Price'className='inputBox'value={price} onChange={(e)=>{setPrice(e.target.value)}}
      />
     
      <input type="text" placeholder='Enter Product catagory'className='inputBox' value={catagory} onChange={(e)=>{setCatagory(e.target.value)}}
      />
     
      <input type="text" placeholder='Enter Product Company'className='inputBox'value={company} onChange={(e)=>{setCompany(e.target.value)}}
      />
      
      <button className='btn-sinup' onClick={updateProduct}>Update Product</button>
      
    </div>
  )
}

export default UpdateProduct