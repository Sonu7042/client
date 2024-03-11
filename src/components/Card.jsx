import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Card = (props) => {
    const {update, item} = props
    const context=useContext(UserContext)
    const {deleteuser}=context

    return (
        <div className='col-md-3 mt-4 -mt-4'>

            <div className="card" >

                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{item.email}</h6>
                    <p className="card-text">{item.password}</p>

                    <i className="fa-solid fa-trash-can msx-4" onClick={() =>deleteuser(item.id)} ></i>
                    <i className="fa-regular fa-pen-to-square mx-4" onClick={()=>update(item)}></i>
                </div>
            </div>

        </div>
    )
}

export default Card