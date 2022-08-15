import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()
    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }

    })
    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }



    return (
        <div>
            <img src='https://www.logodesignteam.com/images/portfolio-images/ecommerce-websites-logo-design/ecommerce-websites-logo-design20.jpg' alt='logo' className='logo' ></img>
        
            { auth ?<ul className='nav-ul'>
            <li>
                <Link to='/'>Product</Link>
            </li>
            <li>
                <Link to='/add'>Add Product</Link>
            </li>
            <li>
                <Link to='/update'>Update Product</Link>


            </li>
            <li>
                <Link to='/profile'>Profile</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li><Link onClick={logout} to='/logout'>Logout<br/> ({JSON.parse(auth).name})</Link></li>



        </ul>
        :
            <ul className='nav-ul nav-right'>
                
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/sineup'>Sineup</Link></li>
            </ul>
}
        </div>
    )
}

export default Nav