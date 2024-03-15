import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../context/UserContext'
import Card from './Card'
import AddData from './AddData'


const Notes = () => {
    const context = useContext(UserContext)
    const { text, getdata, edituser } = context
    // console.log(text)


    const ref = useRef(null)
    const refClose = useRef(null)

    const [user, setUser] = useState({ id: "", ename: "", eemail: "", epassword: "" })


    useEffect(() => {
        getdata()

    }, [])


    const update = (currentnote) => {
        ref.current.click()
        setUser({ id: currentnote.id, ename: currentnote.name, eemail: currentnote.email, epassword: currentnote.password })
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }


    const handleUpdate = (e) => {
        e.preventDefault()
        edituser(user.id, user.ename, user.eemail, user.epassword)
        refClose.current.click()
    }



    return (
        <>
            <AddData />

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form className="my-3" >
                                <div className="mb-3">
                                    <label htmlFor="ename" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="ename" value={user.ename} name="ename" aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eemail" className="form-label">Description</label>
                                    <input type="email" className="form-control" id="eemail" value={user.eemail} name="eemail" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="epassword" className="form-label">password</label>
                                    <input type="password" className="form-control" id="epassword" value={user.epassword} name="epassword" onChange={onChange} />
                                </div>

                            </form>

                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row container">
                {text.map((item) => {

                    return (

                        < Card key={item.id} update={update} item={item} />

                    )
                })}





            </div>
        </>
    )
}

export default Notes