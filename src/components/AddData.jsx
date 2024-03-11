import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


const AddData = () => {
    const [data,setData]=useState({name:"", email:"", password:""})
    

    const context=useContext(UserContext)

    const {createUser}=context


    function handleSumit(e){
        e.preventDefault()
       createUser(data.name, data.email, data.password)
    }


    const onchange=(e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }


    return (
        <div className='mt-4 mb-4'>
            <form onSubmit={handleSumit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">name</label>
                    <input type="text" className="form-control" name='name' id="name" aria-describedby="emailHelp" onChange={onchange}/>   
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">email</label>
                    <input type="email" className="form-control" name='email' id="email" onChange={onchange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" className="form-control" name='password' id="password" onChange={onchange}/>
                </div>

               

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddData