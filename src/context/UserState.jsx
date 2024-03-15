import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = ({ children }) => {

  const host = "https://server-lgtk.onrender.com"

  const [text, setText] = useState([])
  // console.log(text)




  const getdata = async () => {
    const response = await fetch(`${host}`, {
      method: "GET",
      headers: {
        'Context-Type': "application/json"
      }
    })
    const json = await response.json()
    // console.log(json)
   
    

    const newdata = json.map((item) => ({
      id:item.ID,
      name: item.Name,
      email: item.Email,
      password: item.Password,
      
    }))

    setText(newdata)
  }




  const createUser = async (name, email, password) => {
    // console.log(firstname, lastname, age)
    const response = await fetch(`${host}/create`, {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify({ name, email, password })

    })
    const json = await response.json()
    getdata()

    setText(text.concat(json))
  }   





  const deleteuser = async (id) => {
    console.log(id)
    
    const response = await fetch(`${host}/delete/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json"
      }
    })
    const json = await response.json()
    const deletenote=text.filter((note)=> { return note.id !==id})
    setText(deletenote)
  }


  const edituser = async (id, name, email, password) => {

    const response = await fetch(`${host}/update/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ name, email, password })

    })
    const json = await response.json()

    let newNote=JSON.parse(JSON.stringify(text))
// this logic is for front update note
    for(let index=0; index<newNote.length; index++){
      const element = newNote[index]
      if (element.id === id){
        newNote[index].name = name
        newNote[index].email = email
        newNote[index].password = password
        break
      }
      
    }
    setText(newNote)
  }









  return (
    <UserContext.Provider value={{ text, setText, createUser, deleteuser, getdata, edituser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserState