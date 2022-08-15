import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const AddProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [catagory, setCatagory] = useState("")
    const [company, setCompany] = useState("")
    const[error ,setError]=useState(false)
    const navigate= useNavigate()
    const addProduct=async()=>{
        console.warn(!name)
        if(!name || !price || !catagory ||!company){
            setError(true)
            return false;
            

        }
        
        //console.warn(name,price,catagory,company)
        const userId=JSON.parse( localStorage.getItem("user"))._id
        let result=await fetch("http://localhost:5000/addProducts",{
            method:"post",
            body:JSON.stringify({name,price,catagory,company,userId}),
            headers: {
                'Content-Type': 'application/json'
              }
        });
        result=await result.json();
        navigate('/')

    }
    
  return (
    <div className='product'>
      <h1 className='heading'>Add Product</h1>
      <input type="text" placeholder='Enter Product Name' className='inputBox'value={name} onChange={(e)=>{setName(e.target.value)}}
      />
      {error && !name &&<span className='invalidinput'>Enter Valid Name</span>}
      <input type="text" placeholder='Enter Product Price'className='inputBox'value={price} onChange={(e)=>{setPrice(e.target.value)}}
      />
      {error && !price &&<span className='invalidinput'>Enter Valid price</span>}
      <input type="text" placeholder='Enter Product catagory'className='inputBox' value={catagory} onChange={(e)=>{setCatagory(e.target.value)}}
      />
      {error && !catagory &&<span className='invalidinput'>Enter Valid catagory</span>}
      <input type="text" placeholder='Enter Product Company'className='inputBox'value={company} onChange={(e)=>{setCompany(e.target.value)}}
      />
      {error && !company &&<span className='invalidinput'>Enter Valid company</span>}
      <button className='btn-sinup' onClick={addProduct}>Add Product</button>
      
    </div>
  )
}

export default AddProduct
